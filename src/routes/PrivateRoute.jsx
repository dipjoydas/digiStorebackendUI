import React, { useEffect } from 'react';
import { useAuthContext } from '../context/Auth_context';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {loading,user} =useAuthContext()
    console.log(user,loading ,'user and loading')
    const location =useLocation()
    const Authentication = JSON.parse(localStorage.getItem("token"))
    if(Boolean(Authentication) && loading){
        return <div>loading...</div>
    }else {
        if(Boolean(user?.email)){
            return children
        }else{
            return <Navigate to='/login' state={{from:location}} replace></Navigate>
        }

    }
   
    
};

export default PrivateRoute;