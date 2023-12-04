import React from "react";
import { Navigate } from 'react-router-dom';

const SignOut=()=>{
    localStorage.clear();
    return <Navigate to="/signin" />

}
export default SignOut;