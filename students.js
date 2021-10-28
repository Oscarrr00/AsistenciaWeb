const express = require('express');
const router = express.Router();

const Student = require('./DB/models/Student');


router.get('/', (req, res)=>{
  Student.find().then(docs => res.send(docs)).catch(error => res.status(404).send(error));
})
router.post('/', (req, res)=>{
  const student = new Student(req.body);
  student.save().then(doc => res.send(doc)).catch(error => res.status(400).send(error));
})
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const index = Student.findIndex(student => student.id == id);
    if (index === -1) return res.status(404).send('Estudiante no existe');
    const removed = Student.splice(index, 1);
    res.send(removed[0]);
});

module.exports = router;