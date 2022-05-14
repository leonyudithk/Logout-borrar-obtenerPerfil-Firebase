import { typeslogin } from "../types/types"


export const reducerLogin =(state = {}, action)=>{
    switch (action.type) {
        case typeslogin.login:
            return{
                user: action.payload.user,
                pass: action.payload.pass
            }
        case typeslogin.register:
                return{
                   email: action.payload.email, 
                   pass: action.payload.pass,
                   name: action.payload.name,
         }
         case typeslogin.registerformik:
            return{
               email: action.payload.email, 
               pass: action.payload.pass,
               name: action.payload.name,
     }
         case typeslogin.logout:
             return {
                 
             }   
          
    
        default:
           return state
    }

}