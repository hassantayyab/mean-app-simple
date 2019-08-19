const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

// retreiving data
router.get('/contacts', (req, res, next) => {
  Contact.find()
    .then(contacts => res.json(contacts)).catch(err => {
      res.status(409).json('ERROR fetching contact');
    })

  // res.send('Retreiving Contact List');
});

// adding data
router.post('/contact', (req, res, next) => {
  const newContact = new Contact({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone
  });
  newContact.save().then(contact => res.json(contact)).catch(err => {
    res.stats(409).json('ERROR posting contact');
  })
});

// deleting data
router.delete('/contact/:id', (req, res, next) => {
  // Contact.findById(req.params.id)
  //   .then(item => item.remove().then(() => res.json({ success: true })))
  //   .catch(err => res.status(404).json({ success: false }));

  Contact.remove({_id: req.params.id})
 .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;