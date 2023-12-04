import express from 'express';
import mongoose from 'mongoose';
import User from './models/User';

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Create a new user
app.post('/users', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send(user);
});

// Start the server
app.listen(8000, () => {
    console.log('Server is running on port 8000');
});