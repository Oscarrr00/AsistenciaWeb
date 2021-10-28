const mongoose = require('../connect_mongoose');
const studentschema = mongoose.Schema({name:{ type: String, minlength:3 },birth:{ type: Date, required: true},favoriteColor:{ type: String, enum:["red", "orange", "yellow", "green", "blue", "indigo", "violet"] },score: {type: Number, min:1, max:10},favoriteCourse:{type: String, default: "DASW"}},{collection: "student"});
const Student = mongoose.model("student", studentschema);

module.exports = Student;