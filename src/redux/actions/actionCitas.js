import { types } from "../types/types"

export const DeletCitas =(name)=>{
    return {
        
        type: types.delete,
        payload: name
    }

}

export const AddCitas = (cita)=>{
    console.log(cita)
    return{
        type: types.add,
        payload: cita
    }
}