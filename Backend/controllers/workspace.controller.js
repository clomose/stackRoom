import { Workspace } from "../model/workspace.model.js";
import { Member } from "../model/member.model.js";

const createWorkspace = async (req,res) => {
    const {name} = req.body;
    const user = req.user;
    
    const workspace = await Workspace.create({
        name,
        owner: user._id,
    })

    if(!workspace) return res.status(500).json({msg : "Internal Server Error",error: true});
    
    const member = await Member.create({
        workspace : workspace._id,
        user : user._id,
        role : "owner"
        
    })

    res.status(201).json({
        msg : "Workspace created successfully",
        error : false,
        data : workspace
    })
}

const editWorkspace = async(req,res) => {
    const {name} = req.body;
    const workspaceId = req.workspace._id;
    const updatedWorkspace = await Workspace.findByIdAndUpdate(
        workspaceId,
        {name},
        {new : true}
    )

    if(!updatedWorkspace) return res.status(500).json({msg : "Internal Server Error",error: true});

    res.status(201).json({
        msg : "Workspace updated successfully",
        error : false,
        data : updatedWorkspace
    })
}

const deletWorkspace = async(req,res) => {
    const workspaceId = req.workspace._id;
    await Workspace.findByIdAndDelete(workspaceId);
    res.json({ msg: 'Workspace deleted' , error:false});
}

const getMyWorkspaces = async(req,res) => {
    const owner = req.user._id;
    const workspaces = await Workspace.find({owner});
    res.status(201).json({
        msg : "",
        error : false,
        data : workspaces
    })
}

const addMembers = async(req,res) => {
    try {
        const {users} = req.body;  // here users is a array of userId and there roles
        const workspace = req.workspace;

        const existingUsers = await Member.find({
            workspace : workspace._id,
            user : { $in : users.map(u => u.userId) }
        })

        const existingUserIds = new Set(existingUsers.map(u => u.user.toString()));
        const newMembers = users.filter(u => !existingUserIds.has(u.userId));

        if (newMembers.length > 0) {
            await Member.insertMany(
                newMembers.map(({ userId, role }) => ({
                user: userId,
                role,
                workspace: workspace._id,
            }))
        )}
        res.status(200).json({
        msg: 'Members added successfully',
        error: false,
        });
    } catch (err) {
        console.error('Error adding members:', err);
        res.status(500).json({ message: 'Internal Server Error',error  : true });
    }
}

export {createWorkspace,editWorkspace,deletWorkspace,getMyWorkspaces,addMembers};

