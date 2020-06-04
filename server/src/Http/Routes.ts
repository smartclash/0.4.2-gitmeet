import { Router } from 'express';
import passport from '../Passport/Passport';
import { index } from './Controllers/HomeController';
import * as AuthController from './Controllers/AuthController';
import * as RepoController from './Controllers/RepoController';

const route: Router = Router();

route.get('/', index);

route.get('/auth/error', AuthController.error);
route.get('/auth/github', passport.authenticate('github'));
route.get('/auth/callback', passport.authenticate('github', {
    session: false,
    failureRedirect: '/auth/error',
}), AuthController.github);
route.get('/auth/check', passport.authenticate('jwt'), AuthController.jwtInfo);

route.get('/user/repos', passport.authenticate('jwt'), RepoController.showReposForHelp);

route.get('/user/match/repo', passport.authenticate('jwt'), RepoController.showRepoToMentor);
route.get('/user/match/repo/:id/accepted', passport.authenticate('jwt'), RepoController.accepted);

route.post('/user/repo/help-wanted', passport.authenticate('jwt'), RepoController.helpWanted);

export default route;
