const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
//   eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'events', required: true },
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   result: { type: String, default: null }, // Can store result like "Winner", "Runner-Up"
// });
  name: String,
  email: String,
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
  },
  result: {
    type: String, // Or Number or Mixed depending on what "result" means
    default: '',
  },
});
module.exports = mongoose.model('results', resultSchema);
