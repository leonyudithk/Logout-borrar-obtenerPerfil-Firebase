import { types } from "../types/types";

const initialState ={
    citas :[]
}
export const citasReducers =(state = initialState, action) =>{
    switch (action.type) {
        case  types.add:
            return {
                citas: [...state.citas, action.payload]
            }
    case types.delete:
        return {
           citas: state.citas.filter(c => c.name !== action.payload)
        }
        default:
         return state
    }
}