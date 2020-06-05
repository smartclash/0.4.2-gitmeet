import mongoose from '../Mongoose';

const ExpenseSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: 'An expense because of something useful',
    },
    price: {
        type: Number,
        required: true,
    },
});
const Expense = mongoose.model('Expense', ExpenseSchema);

export default Expense;
