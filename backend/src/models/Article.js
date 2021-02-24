const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    card: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: false,
    },
    publishedAt: {
        type: Date,
        default: Date.now()
    },
});

ArticleSchema.plugin(mongoosePaginate);
mongoose.model("Article", ArticleSchema);