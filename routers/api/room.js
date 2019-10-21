const router = require('express').Router();
const passport = require('passport')


// PUT

// Assign a cleaner to a given room id
router.put('/room/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  const { cleaner } = req.body;
  const { id } = req.params;

  Room.findOneAndUpdate(id, {$set: { cleaner }})
    .then(data => res.json({...data, success: true, message: 'Cleaner has been updated.'}))
    .catch(err => res.json({...err, message: 'Failed to update the cleaner'}))
})

// Assign room to a studnet

router.put('/room/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
  const { studentId } = req.body;
  const { id } = req.params;

  Room.findByIdAndUpdate(id, {$addToSet: { students: stduentId }})
    .then(data => res.json({...data, success: true, message: 'Student has been added to the provided room.'}))
    .catch(err => res.json({...err, message: 'Failed to assign student to the room.'}))
})

module.exports = router;
