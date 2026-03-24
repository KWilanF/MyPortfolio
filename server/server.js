import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import workoutRoutes from './routes/workoutRoutes.js';

// express app
const app = express();

// CORS middleware 
app.use(cors({
    origin: ['https://kwillanf-portfolio.vercel.app', 'http://localhost:3000'], // Allow your frontend domains
    credentials: true
}));


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