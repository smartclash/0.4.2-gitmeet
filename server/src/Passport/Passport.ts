import * as passport from 'passport';
import GithubStrategy from './Strategies/Github';
import JWTStrategy from './Strategies/JWT';

passport.use(JWTStrategy);
passport.use(GithubStrategy);

passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((obj, cb) => cb(null, obj));

export default passport;
