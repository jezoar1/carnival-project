const mongoose = require('mongoose');

const eventregisterschema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'events', required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
});

module.exports = mongoose.model('registers', eventregisterschema );
