const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: { type: String, required: [true, 'Title  is required'] },
    isLocked: { type: Boolean, default: false },
    edits: [{
        author: { type: mongoose.SchemaTypes.ObjectId, required: true, ref: 'User' },
        creationDate: { type: Date, default: Date.now },
        content: { type: String, required: true }
    }]
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;