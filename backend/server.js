require('dotenv').config()

const express= require('express');
const mongoose=require('mongoose')
const workoutsroutes=require('./routes/workouts')

//express app
const app=express();

//middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/workouts',workoutsroutes)

//connect
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listen for req
    app.listen(process.env.PORT,()=>{
       console.log("connected & listening on port",process.env.PORT);
});

})
.catch((error)=>{
    console.log(error)
})
