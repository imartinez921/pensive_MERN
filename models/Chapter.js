const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChapterSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    bookId: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    content: {
        type: String,
    },
});

const Chapter = mongoose.model("chapters", ChapterSchema);
module.exports = Chapter;