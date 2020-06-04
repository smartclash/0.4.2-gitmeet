import { Router } from 'express';
import passport from '../Passport/Passport';
import { showSomething } from './Controllers/DummyController';
import * as AuthController from './Controllers/AuthController';
import * as RepoController from './Controllers/RepoController';

const route: Router = Router();

route.get('/', showSomething);

route.get('/auth/err', showSomething);
route.get('/auth/jwt', passport.authenticate('jwt'), showSomething);
route.get('/auth/github', passport.authenticate('github'));
route.get('/auth/callback', passport.authenticate('github', {
    session: false,
    failureRedirect: '/auth/error',
}), AuthController.github);

route.get('/user/repos', passport.authenticate('jwt'), RepoController.showRepos);

route.post('/user/repo/help-wanted', passport.authenticate('jwt'));
route.post('/user/repo/:id/accepted', passport.authenticate('jwt'));
route.post('/user/repo/:id/rejected', passport.authenticate('jwt'));

export default route;
