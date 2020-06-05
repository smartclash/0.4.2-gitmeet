import * as dotenv from 'dotenv';
import * as express from 'express';
import webRoutes from './Http/Routes';
import * as session from 'express-session';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const app: express.Application = express();

app.use(session({
    secret: process.env.APP_KEY, resave: false, saveUninitialized: true,
}));
app.use(express.json());
app.use(webRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log('App listening on port', PORT));
