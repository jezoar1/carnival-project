const { json } = require("body-parser")
const students = require("./studentschema")
const multer = require("multer")
const mongoose = require('mongoose');

// const storage = multer.diskStorage({
//     destination: function (req, res, cb) {
//         cb(null, './upload')
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname)
//     }
// })

// const upload = multer({ storage: storage }).single('image')



const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage }).single('image')

const adduserdetails = (req, res) => {
    // Initialize a new student instance
    let student = new students({
        Name: req.body.Name,
        Email: req.body.Email,
        Password: req.body.Password,
        Age: req.body.Age,
        image: req.file  // Assuming file upload is being handled
    });
    
    // Save the student instance to the database
    student.save()
        .then((result) => {
            res.json({
                data: result,
                msg: "Student saved successfully"
            });
        })
        .catch((err) => {
            console.log("Error saving student:", err);
            res.status(500).send({ message: "Error saving student" });
        });
};


const login = (req, res) => {
    let Email = req.body.Email;
    let Password = req.body.Password;

    students.findOne({ Email: Email })
        .then((result) => {
            console.log(result);
            if (!result) {
                return res.json({
                    status: 400,
                    msg: "User not found"
                });
            }

            // Check if the password matches (consider using hashing in a real app)
            if (Password === result.Password) {
                res.json({
                    status: 200,
                    msg: "Login Successfully",
                    data: {
                        _id: result._id,  // Include the student ID in the response
                        name: result.name, // Optional: Include other fields if needed
                        email: result.Email,
                         imagePath: `/image/${result.image}`
                       
                    }
                });
            } else {
                res.json({
                    status: 409,
                    msg: "Password error"
                });
            }
        })
        .catch((error) => {
            console.log(error);
            res.json({
                status: 500,
                msg: "Internal server error"
            });
        });
};

const viewprofile = (req, res) => {
    // Use findById for better readability and performance
    students.findById(req.params.id)
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
const update = (req, res) => {
    const studentId = req.params.id;  // Get student ID from request params
    
    if (!studentId || studentId === 'undefined') {
        return res.status(400).json({ status: 400, msg: 'Invalid ID' });
    }

    console.log("ID:", studentId, "Data:", req.body);

    students.findByIdAndUpdate(
        { _id: studentId },  // Use the student ID from the params
        {
            Name: req.body.Name,
            Email: req.body.Email,
            Age: req.body.Age,
            image: req.file ? req.file.filename : undefined  // Handle image upload
        },
        { new: true }  // Return the updated document
    )
    .then((response) => {
        if (!response) {
            return res.status(404).json({ status: 404, msg: "Student not found" });
        }
        res.json({
            status: 200,
            msg: "Update successful",
            data: response,
        });
    })
    .catch((err) => {
        res.status(500).json({
            status: 500,
            msg: "Error updating student",
            err: err.message,  // Provide more detailed error message
        });
        console.log("Error:", err);
    });
};

module.exports = { adduserdetails,upload,login,viewprofile,update}