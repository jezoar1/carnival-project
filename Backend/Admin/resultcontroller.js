const Admin = require('./resultschema');
const Participant = require('../student/eventregisterschema');
const Result =require('./resultschema')
const results=require('./resultschema')
// const register=require('../student/eventregistercontroller')

// Add a result for a participant
// const Result = require('../models/results'); // Assuming this is the file you shared
const addresult = async (req, res) => {
  const { eventId, participantId, result } = req.body;

  if (!eventId || !participantId || !result) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const participant = await Participant.findById(participantId);

    if (!participant) {
      return res.status(404).json({ message: 'Participant not found' });
    }

    const newResult = new Result({
      name: participant.name,
      email: participant.email,
      eventId,
      result,
    });

    await newResult.save();

    res.status(200).json({
      message: 'Result saved successfully',
      data: newResult,
    });
  } catch (err) {
    console.error('Error saving result:', err.message);
    res.status(500).json({ message: 'Failed to save result', error: err.message });
  }
};

// Fetch all participants for an event
// const getParticipantsByEvent = async (req, res) => {
//   const { eventId } = req.params;

//   try {
//     const students = await Participant.find({ eventId });

//     if (!participants || participants.length === 0) {
//       return res.status(404).json({ message: 'No participants found for this event' });
//     }

//     res.status(200).json({
//       message: 'Participants fetched successfully',
//       data: participants,
//     });
//   } catch (err) {
//     console.error('Error fetching participants:', err);
//     res.status(500).json({ message: 'Error fetching participants', error: err });
//   }
// };
const viewresults = (req, res) => {
    results.find({})
    .then(data => {
      if (data.length === 0) {
        return res.json({ msg: "No rooms found", data: [] });
      }
      res.status(200).json({ msg: "Rooms retrieved successfully", data });
    })
    .catch(err => {
      res.status(500).json({ msg: "Error retrieving rooms", error: err });
    });
};
module.exports = { addresult, viewresults };
