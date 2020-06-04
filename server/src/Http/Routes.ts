import { Router } from 'express';
import passport from '../Passport/Passport';
import { showSomething } from './Controllers/DummyController';
import * as AuthController from './Controllers/AuthController';
import * as RepoController from './Controllers/RepoController';

const route: Router = Router();

route.get('/', showSomething);

route.get('/auth/error', showSomething);
route.get('/auth/jwt', passport.authenticate('jwt'), showSomething);
route.get('/auth/github', passport.authenticate('github'));
route.get('/auth/callback', passport.authenticate('github', {
    session: false,
    failureRedirect: '/auth/error',
}), AuthController.github);

route.get('/user/repos', passport.authenticate('jwt'), RepoController.showRepos);

route.get('/user/match/repo', passport.authenticate('jwt'));
route.get('/user/match/repo/:id/accepted', passport.authenticate('jwt'), RepoController.accepted);
route.get('/user/match/repo/:id/rejected', passport.authenticate('jwt'), RepoController.rejected);

route.post('/user/repo/help-wanted', passport.authenticate('jwt'), RepoController.helpWanted);

export default route;
