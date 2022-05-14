import { Navigate } from "react-router-dom"

export const PublicRouters =({isAutentica, children})=>{
    return !isAutentica
    ?children
    :<Navigate to="/*" />
}