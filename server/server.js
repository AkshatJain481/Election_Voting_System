// Express setup

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies


// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// Handle GET requests to all other routes by serving index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// MongoDB Atlas connection URL
const mongoURI = 'mongodb+srv://akshatjain:y8T8wuzzEeolQy6a@project.5g7m92f.mongodb.net/?retryWrites=true&w=majority&appName=project';

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Voter schema and model
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

const Voter = mongoose.model('users', voterSchema);

// Route to check voter by Aadhar ID and Voter ID using POST
app.post('/admin', async (req, res) => {
  const { aadharID, voterID } = req.body;
  try {
    const voter = await Voter.findOne({ aadharID, voterID });
    if (!voter) {
      return res.status(404).json({ message: "Voter not found" });
    }
    res.json(voter); // Return voter details if found
  } catch (err) {
    console.error('Error finding voter:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
