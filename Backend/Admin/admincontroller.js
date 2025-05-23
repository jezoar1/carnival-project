const { json } = require("body-parser")
const Admin = require("./adminschema")
const blogs = require('./adminschema');



const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage }).single('image')

const addBlog = (req, res) => {
    // Extract data from req.body and req.file
    const { title, content, author } = req.body;
    const imagePath = req.file ? req.file.path : null;  // Store image path if uploaded

    // Create a new blog post
    let Blog = new Admin({
        title: title,
        content: content,
        // author: author,
        image: imagePath  // Store the image path
    });

    // Save the blog post in the database
    Blog.save()
        .then((result) => {
            res.json({
                data: result,
                msg: "Blog post created successfully!"
            });
        })
        .catch((err) => {
            console.log("Error:", err);
            res.status(500).json({
                msg: "Error creating blog post",
                error: err
            });
        });
};
// const viewblog = (req, res) => {
//     // Use findById for better readability and performance
//     blogs.findById(req.params.id)
//         .then((result) => {
//             if (!result) {
//                 return res.status(404).json({
//                     status: 404,
//                     msg: "Student not found"
//                 });
//             }
//             res.json({
//                 status: 200,
//                 msg: "Data obtained successfully",
//                 data: result
//             });
//         })
//         .catch((err) => {
//             console.error(err); // Log the error for debugging
//             res.status(500).json({
//                 status: 500,
//                 msg: "No data obtained",
//                 error: err.message || "Internal server error" // Provide a more specific error message
//             });
//         });
// };
const viewblog = (req, res) => {
    blogs.find({})
        .then((result) => {
            res.status(200).json({
                msg: "Rooms retrieved successfully",
                data: result
            });
        })
        .catch((err) => {
            console.error("Error: " + err);
            res.status(500).json({ msg: "Error retrieving rooms", error: err });
        });
};

module.exports = { addBlog ,upload,viewblog};