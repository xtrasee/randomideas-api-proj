const mongoose = rerquire('mongoose');

const IdeaSchema = new mangoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text field']
    },
    tag: {
        type: String
    },
    username: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Idea', IdeaSchema);