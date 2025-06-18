import { Project } from "../model/project.model.js";

const createProject = async(req,res) => {

    try {
        const user = req.user._id;
        const workspace = req.workspace._id;

        const {name} = req.body;

        const project = await Project.create({
            name,
            workspace,
            createdBy : user,
        })
        
        res.status(201).json({
            msg : "Project Created Successfully",
            error : false,
            data : project
        })
    
    } catch (error) {
        console.log("Error while creating project",error)
        res.status(400).json({
            msg : "Error while creating project",
            error : true
        })
    }   
}

const editProject = async(req,res) => {
    try {
        const user = req.user._id;
        const workspace = req.workspace._id;
        const projectId = req.project._id;

        const {name} = req.body;

        const project = await Project.findOneAndUpdate(
            { _id: projectId, workspace },
            { $set: { name } },
            { new: true }
        );

        res.status(201).json({
            msg : "Project Updated Successfully",
            error : false,
            data : project
        })

    } catch (error) {
        console.log("Error while updating project",error)
        res.status(400).json({
            msg : "Error while updating project",
            error : true
        })
    }
}

const getAllProjects = async(req,res) => {
    try {
        const workspaceId = req.params.workspaceId;
    
        const projects = await Project.find({workspace : workspaceId}).sort({createdAt:-1});

        res.status(200).json({
            msg: 'Projects fetched successfully',
            error: false,
            data: projects,
        });

    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({
        msg: 'Internal Server Error',
        error: true,
        })
    }
}

const deleteProject = async(req,res) => {
    try {
        const projectId = req.project._id;
        await Project.findByIdAndDelete(projectId);
        res.status(201).json({
            msg: 'Project Deleted Successfully',
            error: false,
        })   
    } catch (error) {
        console.error('Error Deleting project:', error);
        res.status(500).json({
            msg: 'Internal Server Error',
            error: true,
        })
    }
}

export {createProject,editProject,getAllProjects,deleteProject}