import express from 'express'
import { authCheck } from '../middlewares/auth.middleware.js';
import { hasAccess , validProject } from '../middlewares/authorization.middleware.js';
import { createFile, deleteFile, getAllFiles, getFileById, updateFile } from '../controllers/file.controller.js';



const router = express.Router({mergeParams : true});

router.use(authCheck,validProject);

router.post('/',hasAccess(["owner","editor"]),createFile);
router.get('/',getAllFiles);
router.put('/:fileId',hasAccess(["owner","editor"]),updateFile);
router.delete('/:fileId',hasAccess(["owner","editor"]),deleteFile);
router.get('/:fileId',hasAccess(["owner","editor","viewer"]),getFileById);

export default router;

