const Admin = require('./danceschema');
const { events } = require('./songschema');
const students =require('../student/eventregisterschema')

// Controller to add a Dance event
const addEvent = (req, res) => {
    console.log('Request body:', req.body);  // Log the data being sent
  
    let event = new Admin({
        title:req.body.title,
      name: req.body.name,
      date: req.body.date,
      time: req.body.time,
      venue: req.body.venue
    });
  
    event.save()
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
  const viewatitle=((req,res)=>{
    Admin.find({})   
    .then((result)=>{
        res.json({
            msg:"saved",
            data:result
        })
    }) 
        .catch((err)=>{
            console.log("error"+err)
        })
  
})
const viewalldetails = (req, res) => {
  // Use findById for better readability and performance
  Admin.findById(req.params.id)
      .then((result) => {
          if (!result) {
              return res.status(404).json({
                  status: 404,
                  msg: "Student not found"
              });
          }
          res.json({
              status: 200,
              msg: "Data obtained successfully",
              data: result
          });
      })
      .catch((err) => {
          console.error(err); // Log the error for debugging
          res.status(500).json({
              status: 500,
              msg: "No data obtained",
              error: err.message || "Internal server error" // Provide a more specific error message
          });
      });
};
// const viewparticipant=((req,res)=>{
//     students.find({})   
//     .then((result)=>{
//         res.json({
//             msg:"saved",
//             data:result
//         })
//     }) 
//         .catch((err)=>{
//             console.log("error"+err)
//         })
  
// })
const viewparticipant = async (req, res) => {
  const eventId = req.params.id;
  console.log("Fetching participants for eventId:", eventId);

  try {
    const participants = await students.find({ eventId: eventId });
    res.json({
      status: 200,
      msg: "Participants fetched successfully",
      data: participants
    });
  } catch (err) {
    console.error("Error fetching participants:", err);
    res.status(500).json({ status: 500, msg: "Server error" });
  }
};
module.exports = { addEvent,viewatitle,viewalldetails ,viewparticipant};
