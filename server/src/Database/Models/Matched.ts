import mongoose from '../Mongoose';

const MatchedSchema = new mongoose.Schema({
    repo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Repo',
    },
    matched: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    staus: {
        type: Boolean,
        required: true,
    },
});
const Matched = mongoose.model('Matched', MatchedSchema);

export default Matched;
