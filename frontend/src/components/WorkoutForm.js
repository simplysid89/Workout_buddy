import { useState } from "react"
import { Form } from "react-router-dom"
import {useWorkoutContext} from '../hooks/useWorkoutsContext'

const WorkoutForm=()=>{
    const {dispatch}=useWorkoutContext()
    const [title,setTitle]=useState('')
    const [load,setLoad]=useState('')
    const[reps,setReps]=useState('')
    const[error,setError]=useState(null)

    const handlesubmit=async(e)=>{
        e.preventDefault()

        const workout={title,load,reps}
        const response=await fetch('/api/workouts',{
            method:'POST',
            body:JSON.stringify(workout),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json= await response.json()
        if(!response.ok){
            setError(json.error)

        }
        if(response.ok){
            setTitle('')
            setReps('')
            setLoad('')
            setError(null)
            console.log('new workout added',json)
            dispatch({type:'CREATE_WORKOUT',payload:json})
        }
    }

    return(
        <form className="create" onSubmit={handlesubmit}>
            <h3>Add new Workout</h3>
            <label>Excersize title</label>
            <input 
              type="text"
              onChange={(e)=>setTitle(e.target.value)}
              value={title}
            />
            <label>Load(kg)</label>
            <input 
              type="number"
              onChange={(e)=>setLoad(e.target.value)}
              value={load}
            />
            <label>Reps</label>
            <input 
              type="number"
              onChange={(e)=>setReps(e.target.value)}
              value={reps}
            />
            <button>Add workout</button>
            {error && <div className="error">{error}</div>}
        </form>

    )
}

export default WorkoutForm