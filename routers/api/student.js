const router = require('express').Router();
const passport = require('passport')

// Student models
const Student = require("../../models/Student")

const StudentValidation = require('../../validation/student')


// POST

router.post('/student', passport.authenticate('jwt', {session: false}), (req, res) => {
  const { email, id } = req.body

  const { errors, isValid } = StudentValidation(req.body)

  if(!isValid) return res.status(400).json(errors)

  Student.findOne({
    $or: [
      {email},
      {id}
    ]
  }).then(currentUser => {
    if(currentUser) {
      res.status(400).json({ error: 'Student with this id or email already exists.' })
    } else {
      const newStudent = new Student(req.body)

      newStudent.save()
        .then(student => res.json(student))
        .catch(err => res.status(500).json({error: 'Failed to save new student in the DB'}))
    }
  })
  
})


// GET

router.get('/student:batch', passport.authenticate('jwt', {session: false}), (req, res) => {
  const { batch } = req.params;

  Student.find({ batch })
    .then(students => res.json(students))
    .catch(err => console.log({error: 'Failed to fetch students'}))
})


router.get('/students', (req, res) => {
  Student.find().then(students => res.json(students))
})

module.exports = router;
