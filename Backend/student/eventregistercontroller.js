const events = require("../Admin/danceschema");
const students = require("./eventregisterschema")
const registerForEvent = (req, res) => {
    // Log the incoming request body for debugging purposes
    console.log('Request body:', req.body);

    // Destructure data from the request body
    const { eventId, name, email } = req.body;

    // Validate required fields
    if (!eventId || !name || !email) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Find the event by ID (assuming an Event model or database query is available)
    events.findById(eventId)
        .then(event => {
            if (!event) {
                return res.status(404).json({ message: "Event not found" });
            }

            // Create a new registration entry
            const registration = new students({
                eventId,
                name,
                email,
            });

            // Save the registration to the database
             registration.save();
        })
        .then(result => {
            // Send a success response with the saved registration data
            res.status(201).json({
                data: result,
                message: "Registration successful",
            });
        })
        .catch(err => {
            // Log and respond with an error message
            console.error("Error during registration:", err);
            res.status(500).json({ message: "Error registering for event", error: err });
        });
};
const viewparticipants=((req,res)=>{
    students.find({})   
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


module.exports = { registerForEvent,viewparticipants };
