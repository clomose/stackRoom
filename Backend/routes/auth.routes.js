import Router from "express"
import { signup , login , logout, google } from "../controllers/auth.controller.js";
import passport from "passport";

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

router.get('/',(req,res) => {
    res.send("Hello!!");
})

router.get('/google',passport.authenticate('google',{ scope : ['profile','email']}));
router.get('/google/callback',passport.authenticate('google',{
    failureRedirect : '/login',
    session: false
}),google)

export default router