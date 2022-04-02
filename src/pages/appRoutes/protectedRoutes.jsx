import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const useAuth = ({ redirectPath = "/", requiredRole, children}) => {
    const role = "VISITOR"
    const existToken = "SI"

    if(!existToken){
        return <Navigate to={redirectPath} replace />
    }
    if (role === requiredRole){
        return children ? children : <Outlet />;
    }else{
        if (role === "VISITOR"){
            return <Navigate to={"/visitor/home"} replace />;
        }
        if (role === "ADMIN"){
            return <Navigate to={"/admin/home"} replace />;
        }
    }

}

export default useAuth;