import mongoose from 'mongoose';
var uuid = require('uuid'); // library for AutoIncrement Id

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    _id: {type: String, default: uuid.v1},
    title: String,
    author: String,
    description: String,
    topic: String,
    url: String,
    voteCount: {type: Number, default: 0}
});

courseSchema.index({'$**': 'text'});

const model = mongoose.model('course', courseSchema);
export default model;
