import { Router } from 'express';
import { showLogin, showRegister, processLogin, processRegister } from './Controller/AuthController';
import { dashboard, updateTotal } from './Controller/UserController';

const route: Router = Router();

route.get('/auth/login', showLogin);
route.get('/auth/register', showRegister);

route.post('/auth/login', processLogin);
route.post('/auth/register', processRegister);

route.get('/user/dashboard', dashboard);

route.post('/user/total', updateTotal);
route.post('/user/expense', )

export default Router;
