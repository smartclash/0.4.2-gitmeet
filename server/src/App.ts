import * as dotenv from 'dotenv';
import * as express from 'express';
import Mongoose from './Database/Mongoose';

dotenv.config();
const app: express.Application = express();
Mongoose.connection.on('open', () => console.log('Connected to database'));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log('App listening on port', PORT));
