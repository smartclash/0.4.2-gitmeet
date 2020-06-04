import mongoose from '../Mongoose';

const RepoSchema = new mongoose.Schema({
    github: {
        type: String,
        required: true,
    },
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
    },
    language: {
        type: String
    },
    url: {
        type: String,
        required: true,
    },
    license: {
        type: String,
    },
});
const Repo = mongoose.model('Repo', RepoSchema);

export default Repo;
