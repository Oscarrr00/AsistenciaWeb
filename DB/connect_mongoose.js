const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Prueba:test@basededatosweb.k1uct.mongodb.net/StudentsDB").then(()=> console.log('Connect to data base'))
.catch(error => console.log('Error connecting to data base',error));

module.exports = mongoose;