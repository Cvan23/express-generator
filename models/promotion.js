const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const promotionSchema = new Schema({
  name: {
      type: String,
      required: true,
      unique: true,
      name: "Mountain Adventure"
  },
  description: {
      type: String,
      required: true,
      text: "Book a 5-day mountain trek with a seasoned outdoor guide! Fly fishing equipment and lessons provided."
  },
  image: {
    type: String,
    required: true,
    path: "images/breadcrumb-trail.jpg"
  },
  cost: {
    type: Currency,
    required: true,
    cost: 1299
  },
  featured: {
    type: Boolean,
    default: false
  }, 
}, {
  timestamps: true
});


const Promotion = mongoose.model('Promotion', promotionSchema);

module.exports = Promotion;