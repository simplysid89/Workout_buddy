const express=require('express')
const router=express.Router()
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}=require('../controllers/workoutController')


//get all workouts
router.get('/',getWorkouts)

//get single workout
router.get('/:id',getWorkout)

//post workout
router.post('/',createWorkout)

//delete
router.delete('/:id',deleteWorkout)

//update
router.patch('/:id',updateWorkout)


module.exports=router

