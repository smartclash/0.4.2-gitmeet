import mongoose from '../Mongoose';
import isEmail from 'validator/lib/isEmail';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (email: string) => isEmail(email)
        },
    },
});
const User = mongoose.model('User', UserSchema);

export default User;
