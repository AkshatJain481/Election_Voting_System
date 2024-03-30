const express = require('express');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

// MongoDB Atlas connection URL
    const mongoURI =  'mongodb+srv://akshatjain:y8T8wuzzEeolQy6a@project.5g7m92f.mongodb.net/?retryWrites=true&w=majority&appName=project'
// Connect to MongoDB Atlas
mongoose.connect(mongoURI, {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});



const voterSchema = new mongoose.Schema({
    aadharID: {
        type: Number,
        required: true,
        unique: true
    },
    voterID: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    }
});

// Create Model
const Voter = mongoose.model('users', voterSchema);

// Middleware to parse JSON
app.use(express.json());



// Get all voters
// Get voter by Aadhar ID and Voter ID
app.get('/admin', async (req, res) => {
    const { aadharID, voterID } = req.query;
    try {
        const voter = await Voter.findOne({ aadharID, voterID });
        console.log(voter)
        if (!voter) {
            // If voter is not found, return a 404 response
            console.log("not found")
        }
        // If voter is found, return the voter details
        res.json(voter);
    } catch (err) {
        // Handle other errors (e.g., database errors) with a 500 response
        res.status(500).json({ message: 'Server Error' });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
