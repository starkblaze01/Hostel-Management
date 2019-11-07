const router = require('express').Router();
const passport = require('passport')

// Staff model
const Staff = require("../../models/Staff")

// Add validations
const staffValidation = require('../../validation/staff.js')

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  Staff.find()
    .then(data => res.json(data))
    .catch(err => res.json({ ...err, message: 'Failed to fetch staff details' }))
})

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = staffValidation(req.body)
  if (!isValid) return res.status(400).json(errors)

  const newStaff = new Staff(req.body)

  newStaff.save()
    .then(data => res.json({ success: true, message: 'Staff has been saved.' }))
    .catch(err => res.json({ ...err, message: 'Failed to save staff' }))
})

router.delete('/:_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { _id } = req.params

  Staff.findByIdAndDelete({ _id })
    .then(status => res.json({ success: true, message: 'Staff has been deleted.' }))
    .catch(err => res.json({ ...err, message: 'Failed to delete staff' }))

})

router.put('/availability/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { id } = req.params;
  const { isAvailable } = req.body;
  Staff.findByIdAndUpdate(id, { $set: { isAvailable } })
    .then(data => res.status(200).json({ message: 'Staff availability has been updated.', success: true }))
    .catch(err => res.json({ ...err, message: 'Failed to update staff availability.' }))
})

module.exports = router;
