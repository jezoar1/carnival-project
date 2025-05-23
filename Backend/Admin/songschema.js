const mongoose = require('mongoose');

const songschema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'title name is required'],  // Validation: Name is required
},
    name: {
        type: String,
        required: [true, 'Event name is required'],  // Validation: Name is required
    },
    date: {
        type: Date,
        required: [true, 'Event date is required'],  // Validation: Date is required
    },
    time: {
        type: String,
        required: [true, 'Event time is required'],  // Validation: Time is required
    },
    venue: {
        type: String,
        required: [true, 'Event venue is required'],  // Validation: Venue is required
    },
}, {
    timestamps: true  // Automatically add `createdAt` and `updatedAt` timestamps
});

module.exports = mongoose.model('songs', songschema);
