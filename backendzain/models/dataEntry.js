import mongoose from 'mongoose'

const deSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        gender: {
            type: String,
        },
        country: {
            type: String,
        },
        interests: {
            type: Array,
        },
        bio: {
            type: String,
        },
    }
)

const DE = mongoose.model('dataentries', deSchema);
export default DE