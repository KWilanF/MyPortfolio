import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import workoutRoutes from './routes/workoutRoutes.js';

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/workouts', workoutRoutes);

// connect to db
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Server is running....');
        });
    })
    .catch((error) => {
        console.log(error);
    });