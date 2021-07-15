import mongoose from 'mongoose';

const Dog = new mongoose.Schema({
    url: {type: String, required: true},
    fileSizeBytes: {type: Number, required: true},
    width: {type: String, required: true},
    height: {type: String, required: true},
})

export default mongoose.model('Dog', Dog)
