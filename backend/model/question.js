var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const questionSchema = new Schema({
    title: String,
    description: String,
    potName: String,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("question", questionSchema);