import app from "./app.js";
import connectDB from './db/index.js';

connectDB().then(() => {
    app.listen(5000,() => {
        console.log("Server is running on port 5000")
    })
}).catch((error) => {
    console.error("Error while connecting to MongoDB : ", error);
    process.exit(1);
})
