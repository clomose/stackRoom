export const projectSetUp = (io,socket) => {
    // chat or project joined
    socket.on("join-project-chat",({workspaceId,projectId,user}) => {
        const room = `${workspaceId}:${projectId}`;
        socket.join(room);
        socket.to(room).emit("user-joined-chat",user);
    })

    //message is send
    socket.on("send-message",({workspaceId,projectId,text,user}) => {
        const room = `${workspaceId}:${projectId}`;
        io.to(room).emit("receive-message",{
            user,
            text,
            timestamp : new Date(),
        })
    })

    //notify user is typing
    socket.on("typing",({workspaceId,projectId,user}) => {
        const room = `${workspaceId}:${projectId}`
        socket.to(room).emit("typing",user)
    })

    //notify user has stop typing
    socket.on("stop-typing",({workspaceId,projectId,user}) => {
        const room = `${workspaceId}:${projectId}`;
        socket.to(room).emit("stop_typing", user);
    })
}