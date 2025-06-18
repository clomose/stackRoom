import { Workspace } from "../model/workspace.model.js"
import { Project } from "../model/project.model.js";

export const isWorkspaceOwner = async (req, res, next) => {
  try {
    const {workspaceId} = req.params
    console.log(workspaceId);
    const workspace = await Workspace.findById(req.params.workspaceId);
    if (!workspace) {
      return res.status(404).json({
        msg: "Workspace not found",
        error: true,
      });
    }

    // Proper comparison of ObjectId
    if (!workspace.owner.equals(req.user._id)) {
      return res.status(403).json({
        msg: "Unauthorized! You are not the workspace owner",
        error: true,
      });
    }

    req.workspace = workspace;
    next();
  } catch (error) {
    console.error("Error in isWorkspaceOwner middleware:", error);
    res.status(500).json({
      msg: "Server Error",
      error: true,
    });
  }
};

export const hasWorkspaceAccess = (roles) => { // here roles is a array
    return async(req,res,next) => {
        const workspace = await Workspace.findById(req.params.workspaceId);
        if(!workspace) return res.status(404).json({msg:"WorkSpace not found",error : true});

        if(workspace.owner.equals(req.user._id)){
            req.workspace = workspace;
            return next();
        }

        const member = workspace.members.find((x) => c.user.toString() === req.user.id);

        if(!member || roles.include(member.role)){
            return res.status(403).json({ message: 'Access denied',error:true });
        }

        req.workspace = workspace;
        req.userRole = member.role;
        next();
        
    }

}

export const validProject = async(req,res,next) => {
  try {
    const projectId = req.params.projectId;
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({
        msg: "Project not found",
        error: true,
      });
    }

    req.project = project;
    next()

  } catch (error) {
    console.error("Error in Valid middleware:", error);
    res.status(500).json({
      msg: "Server Error",
      error: true,
    });
  }
}