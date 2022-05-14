import { Navigate } from "react-router-dom"

export const PrivateRouters = ({isAutentica, children })=>{
    return isAutentica
    ?children
    : <Navigate to="/login"/>
} 