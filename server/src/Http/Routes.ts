import { Router } from 'express';
import passport from '../Passport/Passport';
import { showSomething } from './Controllers/DummyController';

const route: Router = Router();

route.get('/', showSomething);

route.get('/auth/jwt');
route.get('/auth/github', passport.authenticate('github'));
route.get('/auth/callback', passport.authenticate('github', { failureRedirect: '/auth/error' }), showSomething);

export default route;
