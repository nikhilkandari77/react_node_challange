import React from "react";
import { Navigate } from 'react-router-dom';


const Index=()=>{
    const isLoggedIn=localStorage.getItem("isLoggedIn")||false;
    return (
        <div className="Auth">
            {
                isLoggedIn?
             <Navigate to="/dashboard/home" />
             :
             <Navigate to="/signin" />
            }

        </div>
    );
}
export default Index;