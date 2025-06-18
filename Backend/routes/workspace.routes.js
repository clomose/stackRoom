import Router from "express"
import { authCheck } from "../middlewares/auth.middleware.js";
import { addMembers, createWorkspace, deletWorkspace, editWorkspace, getMyWorkspaces } from "../controllers/workspace.controller.js";
import { isWorkspaceOwner } from "../middlewares/authorization.middleware.js";

const router = Router();

router.use(authCheck);

router.post('/',createWorkspace);
router.put('/:workspaceId',isWorkspaceOwner,editWorkspace);
router.get('/',getMyWorkspaces);
router.delete('/:workspaceId',isWorkspaceOwner,deletWorkspace);
router.post('/:workspaceId/add',isWorkspaceOwner,addMembers);

export default router