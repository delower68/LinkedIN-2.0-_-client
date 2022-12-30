
import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import SmallSpinner from '../Pageses/Shared/SmallSpinner/SmallSpinner';


const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext);
    const location = useLocation()


    if(loading){
        return <SmallSpinner/>
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace ></Navigate>
    }
    return children ;
    
};

export default PrivateRoute;