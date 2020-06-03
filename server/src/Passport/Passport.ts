import * as passport from 'passport';
import GithubStrategy from './Strategies/Github';

passport.use(GithubStrategy);

export default passport;
