import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoute from './routes/auth.routes.js'
import workspaceRoute from './routes/workspace.routes.js'
import projectRoutes from './routes/project.routes.js';
import passport from 'passport';
import session from 'express-session';

const app = express();

dotenv.config();  //configuring dotenv to use environment variables

import './config/passport.js'

app.use(express.urlencoded({ extended: true })); // to parse urlencoded data
app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL,  // Allow requests from the client URL
    credentials: true  // Allow cookies to be sent with requests
}));
app.use(cookieParser());  
app.use(session({
    secret : process.env.SESSION_SECRET,
    resave : false,
    saveUninitialized: true,
}))

app.use(passport.initialize());
app.use(passport.session());

//Routes 

//auth routes
app.use('/api/auth',authRoute);

//workspace route
app.use('/api/workspace',workspaceRoute);

//project route
app.use('/api/workspace/:workspaceId/projects', projectRoutes);


export default app;