import mongoose from '../Mongoose';
import isEmail from 'validator/lib/isEmail';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate: {
            validator: (email: string) => isEmail(email),
        },
    },
    password: {
        type: String,
        required: true,
    },
    total: {
        type: Number,
        default: 0.00,
    },
    expenses: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }],
});
const User = mongoose.model('User', UserSchema);

export default User;
