import * as dotenv from 'dotenv';
import { Strategy } from 'passport-github';
import User from '../../Database/Models/User';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const GithubStrategy = new Strategy({
    clientID: process.env.GITHUB_CLIENT,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: process.env.HOST + 'auth/callback',
    scope: 'user:email'
}, async (token, refresh, profile, done) => {
    let user: any = await User.findOne({ github: profile.id });
    if (!user) {
        user = await new User({
            github: profile.id,
            username: profile.username,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
        }).save();
    }

    done(null, user);
});

export default GithubStrategy;
