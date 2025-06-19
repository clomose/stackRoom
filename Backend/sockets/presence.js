const onlineUsers = new Map();

export const setupPresence = (io, socket) => {
  socket.on("set-user-online", ({ userId, username }) => {
    onlineUsers.set(socket.id, { userId, username });
  });

  socket.on("get-online-users", ({ roomId }) => {
    const usersInRoom = Array.from(onlineUsers.values());
    io.to(roomId).emit("online-users", usersInRoom);
  });

  socket.on("disconnect", () => {
    onlineUsers.delete(socket.id);
  });
};
