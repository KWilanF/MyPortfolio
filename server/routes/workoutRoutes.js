import express from 'express';
import { createWorkout,
     getWorkouts,
      getWorkout,
       deleteWorkout,
        updateWorkout } from '../controllers/workoutControllers.js';


const router = express.Router();


router.get('/', getWorkouts);


router.get('/:id', getWorkout);
 
router.post('/', createWorkout)


router.delete('/:id', deleteWorkout);

router.patch('/:id', updateWorkout);




export default router;