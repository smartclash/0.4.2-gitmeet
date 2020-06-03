import mongoose from '../Mongoose';

const RepoSchema = new mongoose.Schema({
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
        required: true,
    },
    languages: [{
        type: String
    }],
});
const Repo = mongoose.model('Repo', RepoSchema);

export default Repo;
