import passport from "passport";
import { Strategy as GoogleStategy } from "passport-google-oauth20";
import { User } from "../model/user.model.js";
import dotenv from 'dotenv';
dotenv.config(); 

passport.use(new GoogleStategy({
    clientID : process.env.GOOGLE_CLIENT_ID ,
    clientSecret : process.env.GOOGLE_CLIENT_SECRET,
    callbackURL : 'http://localhost:5000/api/auth/google/callback',
},async (accessToken,refreshToken,profile,done) => {
    try {
        let user  = await User.findOne({
            googleId : profile.id
        })

        if(!user){
            user = await User.create({
                googleId : profile.id,
                name : profile.displayName,
                email : profile.emails?.[0].value,
                avatar : profile.photos?.[0].value
            });
        }

        done(null,user);
    } catch (error) {
        done(err,null)
    }

}));

passport.serializeUser((user,done) =>{
    done(null,user._id);
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});