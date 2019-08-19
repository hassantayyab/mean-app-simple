const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ContactSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});

// module.exports = Contacts = mongoose.model('contacts', ContactsSchema);
const Contacts = module.exports = mongoose.model('Contact', ContactSchema);