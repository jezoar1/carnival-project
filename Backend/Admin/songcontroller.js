const Admin = require('./songschema');

// Controller to add a Dance event
const addsong = (req, res) => {
    console.log('Request body:', req.body);  // Log the data being sent
  
    let songs = new Admin({
        title:req.body.title,
      name: req.body.name,
      date: req.body.date,
      time: req.body.time,
      venue: req.body.venue
    });
  
    songs.save()
      .then(result => {
        res.json({
          data: result,
          msg: "Event saved successfully"
        });
      })
      .catch(err => {
        console.error("Error saving event:", err);
        res.status(500).json({ message: "Error saving event", error: err });
      });
  };
  module.exports = { addsong};