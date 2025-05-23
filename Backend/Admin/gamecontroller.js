const Admin = require('./gameschema');

// Controller to add a Dance event
const addgame = (req, res) => {
    console.log('Request body:', req.body);  // Log the data being sent
  
    let games = new Admin({
        title:req.body.title,
      name: req.body.name,
      date: req.body.date,
      time: req.body.time,
      venue: req.body.venue
    });
  
    games.save()
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
  module.exports = { addgame};