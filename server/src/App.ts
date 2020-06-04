import * as dotenv from 'dotenv';
import routes from './Http/Routes';
import * as express from 'express';
import Mongoose from './Database/Mongoose';
import passport from './Passport/Passport';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

const app: express.Application = express();
Mongoose.connection.on('open', () => console.log('Connected to database'));

app.use(express.json());
app.use(passport.initialize());
app.use(routes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log('App listening on port', PORT));
