import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../componente/login/Login';
import Register from '../componente/login/Register';
import DashboarRouters from './DashboarRouters';
import { PrivateRouters } from './PrivateRouters';
import { PublicRouters } from './PublicRouters';


const AppRouters = () => {
    const [checking, setChecking]=useState(true)
    const [isLoggedIn, setIsLoggedIn]= useState(false)

    useEffect(() => {
       const auth = getAuth()
       onAuthStateChanged(auth, (user)=>{
           if(user?.uid){
                  setIsLoggedIn(true)
           }
           else{
               setIsLoggedIn(false)
           }
           setChecking(false)
       })
    }, [setIsLoggedIn, setChecking])

if(checking){
    return(
        <h1>Espere....</h1>
    )
}
    return (
     <>
     <BrowserRouter>
        <Routes>
             <Route path="/login" element={
                  <PublicRouters isAutentica={isLoggedIn}>
                        <Login/>
                  </PublicRouters> 
                
             }/>

<Route path="/register" element={
                  <PublicRouters isAutentica={isLoggedIn}>
                        <Register/>
                  </PublicRouters> 
                
             }/>

    <Route path="/*" element={
        <PrivateRouters isAutentica={isLoggedIn}>
            <DashboarRouters/>
        </PrivateRouters>
    }/>

        </Routes>
     </BrowserRouter>
               
     </>
       
        
      
    );
};

export default AppRouters;
