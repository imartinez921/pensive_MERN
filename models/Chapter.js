const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChapterSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    },
    content: {
        type: String,
    },
    bookId: {
        type: String,
        require: true,
    },
});

const Chapter = mongoose.model("chapters", ChapterSchema);
module.exports = Chapter;