import { Strategy } from 'passport-github';

const GithubStrategy = new Strategy({
    clientID: process.env.GITHUB_CLIENT,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: process.env.HOST + 'auth/callback',
}, (token, refresh, profile, done) => {
    console.log(profile);
    return done(null, profile);
});

export default GithubStrategy;
