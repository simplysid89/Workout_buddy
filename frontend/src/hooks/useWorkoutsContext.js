import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext=()=>{
    const context = useContext(WorkoutsContext)

    if(!context){
        throw Error('useworkouts context must be used inside an workoutcontextprovider')
        
    }

    return context
}