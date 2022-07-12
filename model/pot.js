var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const potSchema = new Schema({
    name: String,
    tag: String,
    homepage: String,
    initialPotAmount: Number,
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("pot", potSchema);