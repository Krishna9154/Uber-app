const mongoose = require('mongoose');


const BlacklistTokenSchema = new mongoose.Schema({
  token: {                                 // ye me user se nhi 
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400 // Token will be automatically removed after 24 hours
  }
});

module.exports = mongoose.model('BlacklistToken', BlacklistTokenSchema);