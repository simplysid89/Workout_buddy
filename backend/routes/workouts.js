const express=require('express')
const router=express.Router()
const Workout=require('../models/workoutmodel')

//get all workouts
router.get('/',(req,res)=>{
    res.json({mssg:'GET all workouts'})
})

//get single workout
router.get('/:id',(req,res)=>{
    res.json({mssg:'get a single workout'})
})

//post workout
router.post('/',async(req,res)=>{
    const{title,load,reps}=req.body
    try{
        const workout=await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error:error.message})
    }
})

//delete
router.delete('/:id',(req,res)=>{
    res.json({mssg:'delete a workout'})
})

//update
router.patch('/:id',(req,res)=>{
    res.json({mssg:'patch a workout'})
})


module.exports=router

