import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();
console.log('Mongo URI:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB:', err);
    });

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});