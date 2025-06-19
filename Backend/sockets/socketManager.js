import { fileSetUp } from "./fileSetUp.js"
import { projectSetUp } from "./projectSetUp.js"
import { setupPresence } from "./presence.js"

export const initSocket = (io) => {
    io.on("connection",(socket) => {
        console.log("Socket connected:",socket.id)

        fileSetUp(io,socket);
        projectSetUp(io,socket);
        setupPresence(io,socket);

        socket.on('disconnect',() => {
            console.log("Disconnected:", socket.id);
        })
    })
}