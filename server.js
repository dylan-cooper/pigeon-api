const express = require('express'),
      morgan = require('morgan'),
      data = require('./data');

var app = express()

app.set('port', 3002);

app.use(morgan('dev'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/students/:id', (req, res, next) => {
  console.log(req.params)
  var student = data.students[req.params.id - 1];
  if (student) {
    res.send(student)
  } else {
    next(new Error('404')); 
  }
});

app.get('/api/students', (req, res) => {
  var students = data.students.map ((student, index) => (
    Object.assign({}, { id: index + 1,
                        first_name: student.first_name, 
                        last_name: student.last_name })
  ));
  res.send(students);
});

app.get('/', function (req, res) {
  res.send(data.persons[0]);
});

app.listen(app.get('port'), function () {
  console.log(`Find the server at ${app.get('port')}`);
})
