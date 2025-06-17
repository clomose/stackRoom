import Router from "express"
import { authCheck } from "../middlewares/auth.middleware.js";
import { addMembers, createWorkspace, deletWorkspace, editWorkspace, getMyWorkspaces } from "../controllers/workspace.controller.js";
import { isWorkspaceOwner } from "../middlewares/authorization.middleware.js";

const router = Router();

router.post('/',authCheck,createWorkspace);
router.put('/:workspaceId',authCheck,isWorkspaceOwner,editWorkspace);
router.get('/',authCheck,getMyWorkspaces);
router.delete('/:workspaceId',authCheck,isWorkspaceOwner,deletWorkspace);
router.post('/:workspaceId/add',authCheck,isWorkspaceOwner,addMembers);

export default router