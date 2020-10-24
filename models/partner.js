const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnerSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    name: "Mongo Fly Shop"
  },
  description: {
    type: String,
    required: true,
    text: "Need a new fishing pole, a tacklebox, or flies of all kinds? Stop by Mongo Fly Shop." 
  },
  image: {
    type: String,
    required: true,
    path: "images/mongo-logo.png"
  },
  featured: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true
});

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;