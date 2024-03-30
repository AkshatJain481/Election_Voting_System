const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
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

// Routes

// Create a new voter
app.post('/admin', async (req, res) => {
    try {
        const newVoter = new Voter(req.body);
        await newVoter.save();
        res.status(201).json(newVoter);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get all voters
// Get voter by Aadhar ID and Voter ID
app.get('/admin', async (req, res) => {
    const { aadharID, voterID } = req.query;
    try {
        const voter = await Voter.findOne({ aadharID, voterID });
       
        res.json(voter);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
