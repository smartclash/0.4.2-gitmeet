import * as dotenv from 'dotenv';
import { Strategy, ExtractJwt } from 'passport-jwt';
import User from '../../Database/Models/User';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const JWTStrategy = new Strategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.APP_KEY
}, async (payload, done) => {
    const user = await User.findOne({ email: payload.email }).lean();
    return done(null, user);
});

export default JWTStrategy;
