const router = require('express').Router();
const passport = require('passport')
const Room = require('../../models/Room')


const { validateCleanerInput, validateStudentInput, validateRoomInput }  = require('../../validation/room')

// GET
// Get a single room defined by id
router.get('/:block',  passport.authenticate('jwt', {session: false}), (req, res) => {
  const { block } = req.params
  
  Room.find({ block }).then(room => res.json(room))
    .catch(err => res.status(400).json({ ...err, message: 'Failed to fetch rooms'}))
})


// Get all rooms
router.get('/all',  passport.authenticate('jwt', {session: false}), (req, res) => {
  Room.find().then(room => res.json(room))
    .catch(err => res.status(400).json({ ...err, message: 'Failed to fetch rooms'}))
})

// POST
// Create a room
router.post('/',  passport.authenticate('jwt', {session: false}), (req, res) => {
  const { errors, isValid } = validateRoomInput(req.body)
  if(!isValid) return res.status(400).json(errors)
  
  const { id, block, gender } = req.body

  const room = new Room({
    id,
    block,
    gender
  })

  room.save()
    .then(data => res.json({ success: true, message: 'Room has been created.'}))
    .catch(err => res.status(400).json({...err, message: 'Error while creating room.'}))
})

// PUT
// Assign a cleaner to a given room id
router.put('/cleaner/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  const { errors, isValid } = validateCleanerInput(req.body)
  if(!isValid) return res.status(400).json(errors)
  
  const { cleaner } = req.body;
  const { id } = req.params;

  Room.findOneAndUpdate(id, {$set: { cleaner }})
    .then(data => res.json({success: true, message: 'Cleaner has been updated.'}))
    .catch(err => res.status(400).json({...err, message: 'Failed to update the cleaner'}))
})

// Assign room to a studnet

router.put('/assign', passport.authenticate('jwt', {session: false}), (req, res) => {
  const { errors, isValid } = validateStudentInput(req.body)
  if(!isValid) return res.status(400).json(errors)  
  // studentIds is an array of college Ids and roomid is the room number
  const { studentIds, roomId } = req.body;
  Room.findOneAndUpdate({id: roomId}, { students: studentIds })
    .then(data => res.json({ success: true, message: 'Student has been added to the provided room.'}))
    .catch(err => res.json({...err, message: 'Failed to assign student to the room.'}))
})

module.exports = router;
