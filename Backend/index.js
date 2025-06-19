import app from "./app.js";
import connectDB from './db/index.js';
import http from 'http';
import { Server } from 'socket.io';
import { initSocket } from "./sockets/socketManager.js";

//socket
const server = http.createServer(app);
const io = new Server(server,{
    cors : {
        origin : process.env.CLIENT_URL,
        methods : ["GET","POST"],
        credentials : true,
    }
})

initSocket(io);

connectDB().then(() => {
    app.listen(5000,() => {
        console.log("Server is running on port 5000")
    })
}).catch((error) => {
    console.error("Error while connecting to MongoDB : ", error);
    process.exit(1);
})
