const mongoose = require('mongoose');

const adminSchema =  mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    // author: { type: String, required: true },
    image: { type: Object },  // Store the image file path
    // createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("blogs", adminSchema);