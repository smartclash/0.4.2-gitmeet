import mongoose from '../Mongoose';
import isEmail from 'validator/lib/isEmail';

const UserSchema = new mongoose.Schema({
    github: {
        type: String,
        required: true,
    },
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
    city: {
        type: String,
        required: false,
    },
    avatar: {
        type: String,
        required: false,
    },
    repos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Repo'
    }]
});
const User = mongoose.model('User', UserSchema);

export default User;
