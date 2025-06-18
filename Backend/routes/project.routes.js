import express from 'express'
import { authCheck } from "../middlewares/auth.middleware.js";
import { isWorkspaceOwner,validProject } from '../middlewares/authorization.middleware.js';
import { createProject, deleteProject, editProject, getAllProjects } from '../controllers/project.controller.js';

const router = express.Router({ mergeParams: true });

router.use(authCheck);

router.get('/',getAllProjects);
router.post('/',isWorkspaceOwner,createProject);
router.put('/:projectId',isWorkspaceOwner,validProject,editProject);
router.delete('/:projectId',isWorkspaceOwner,validProject,deleteProject);

export default router
