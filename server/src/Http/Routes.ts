import { Router } from 'express';
import passport from '../Passport/Passport';
import { showSomething } from './Controllers/DummyController';
import * as AuthController from './Controllers/AuthController';

const route: Router = Router();

route.get('/', showSomething);

route.get('/auth/jwt', passport.authenticate('jwt'), showSomething);
route.get('/auth/github', passport.authenticate('github'));
route.get('/auth/callback', passport.authenticate('github', {
    session: false,
    failureRedirect: '/auth/error',
}), AuthController.github);

export default route;
