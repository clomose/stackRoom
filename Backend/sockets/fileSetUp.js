
export const fileSetUp = (io,socket) => {
    let currentFileRoom = null
    socket.on("file-joined",({ workspaceId, projectId, fileId, user }) => {
        const room = `${workspaceId}:${projectId}:${fileId}`;
        if (currentFileRoom && currentFileRoom !== room) {
            socket.leave(currentFileRoom);
            socket.to(currentFileRoom).emit("user-left-file", { user });
        }
        currentFileRoom = room
        socket.join(room);
        socket.to(room).emit("user-joined-file",user);

        socket.to(room).emit("request-latest-code",{newSocketId : socket.id})
    })

    socket.on("code-change",({ workspaceId, projectId, fileId, code }) => {
        const room = `${workspaceId}:${projectId}:${fileId}`;
        socket.to(room).emit("code-change",{code});
    })

    socket.on("cursor-position",({workspaceId,projectId,fileId,user, position}) => {
        const room = `${workspaceId}:${projectId}:${fileId}`;
        socket.to(room).emit("cursor-position",{user,position});
    })
    
    socket.on("save-code", ({ workspaceId, projectId, fileId, code }) => {
    // Can trigger save to DB here
    const room = `${workspaceId}:${projectId}:${fileId}`;
    io.to(room).emit("code-saved", {
            fileId,
            timestamp: Date.now(),
        })
    });

    socket.on("send-code-to-new-user",({sockedId,code})=> {
        io.to(socketId).emit("code-change",{code})
    })

    socket.on("file-create",({ workspaceId, projectId, newFile }) => {
        const projectRoom = `${workspaceId}:${projectId}`;
        socket.broadcast.to(projectRoom).emit("file-created", { newFile });
    })

    socket.on("file-delete",({ workspaceId, projectId, fileId }) => {
        const projectRoom = `${workspaceId}:${projectId}`;
        socket.broadcast.to(projectRoom).emit("file-deleted", { fileId });

        const deletedFileRoom = `${workspaceId}:${projectId}:${fileId}`;
        if (currentFileRoom === deletedFileRoom) {
            socket.leave(currentFileRoom);
            currentFileRoom = null;
        }
    })

    socket.on("disconnect", () => {
        if (currentFileRoom) {
            socket.to(currentFileRoom).emit("user-left-file", { socketId: socket.id });
            socket.leave(currentFileRoom);
            currentFileRoom = null;
        }
    });

} 