const express = require('express');
const router = express.Router();
const app = express();
require('dotenv').config;
const Student = require('./DB/models/Student');
const { PORT } = process.env;
app.use(express.json());
//const students = require('./students');
//app.use('/students',students);

app.get('/students', (req, res)=>{
  Student.find().then(docs => res.send(docs)).catch(error => res.status(404).send(error));
});
app.post('/students', (req, res)=>{
  const student = new Student(req.body);
  student.save().then(doc => res.send(doc)).catch(error => res.status(400).send(error));
});
app.put('/students:id', (req, res) => {
    const {body} = req;
    const {id} = req.params;
    const index = Student.findIndex(student => student.id == id);
    if (index === -1) return res.status(404).send('Estudiante no existe');
    const student = Student[index];
    student.name = body.name || student.name;
    student.birth = body.birth || student.birth;
    student.favoriteColor = body.favoriteColor ||student.favoriteColor;
    student.score = body.score || student.score;
    student.favoriteCourse = body.favoriteCourse || student.favoriteCourse;
  
    res.send(student);
});
app.delete('/students:id', (req, res) => {
    const {id} = req.params;
    const index = Student.findIndex(student => student.id == id);
    if (index === -1) return res.status(404).send('Estudiante no existe');
    const removed = Student.splice(index, 1);
    res.send(removed[0]);
});
app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
});
//module.exports = router;
