import { File } from "../model/file.model.js";

const createFile = async(req,res) => {
    try {
        const role  = req.userRole;

        if(role==='viewer') return res.status(400).json({msg : "Not Permission to create",error:true});

        const { projectId } = req.params;
        const {name,language} = req.body;

        if (!name || !language) {
            return res.status(400).json({ msg: "Name and language are required", error: true });
        }
        const file = await File.create({
            name,
            language,
            project : projectId
        })
        
        res.status(201).json({
            msg : "file created",
            error : false,
            data : file,
        })
    } catch (error) {
        console.log("Error while creating file",error);
        res.status(500).json({msg : "Error while creating file",error:true})
    }
}

const deleteFile = async(req,res) => {
    try {
        const {fileId} = req.params;
        await File.findByIdAndDelete(fileId);
        res.status(201).json({
            msg : "file deleted",
            error : false,
        })
    } catch (error) {
        console.log("Error while deleting file",error);
        res.status(500).json({msg : "Error while deleting file",error:true})
    }
}

const updateFile = async(req,res) => {
    try {
        const role = req.userRole;
        if (role === 'viewer') {
        return res.status(403).json({
            msg: "Permission denied: Viewers cannot update files.",
            error: true,
            });
        }

        const {fileId } = req.params;
        const {name,language,content} = req.body;

        const updateData = {};
        if (name !== undefined) updateData.name = name;
        if (language !== undefined) updateData.language = language;
        if (content !== undefined) updateData.content = content;
        
        const updatedFile = await File.findByIdAndUpdate(fileId,updateData,{new : true});
        if (!updatedFile) return res.status(404).json({ msg: "File Not Updated", error: true });

        res.status(200).json({
            msg: "File updated successfully",
            error: false,
            data: updatedFile,
        });
    } catch (error) {
        console.log("File Not Updated",error);
        res.status(500).json({ msg: "File Not Updated", error: true });
    }    
}

const getAllFiles = async(req,res) => {
    try {
        const {projectId} = req.params;
        const files = await File.find({project : projectId}).sort({createdAt : -1});
        res.status(200).json({
            msg: "All Files",
            error: false,
            data: files,
        });
    } catch (error) {
        console.log("Error While finding All files",error);
        res.status(500).json({ msg: "Error While finding All files", error: true });
    }
}

export {createFile,updateFile,deleteFile}