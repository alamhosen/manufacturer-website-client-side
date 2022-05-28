import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { signOut } from 'firebase/auth';
import useUser from '../../hooks/useUser';

const RequireUser = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [normalUser, normalUserLoading] = useUser(user);
    const location = useLocation();

    if(loading || normalUserLoading){
        return <Loading></Loading>
    }

    if(!user || !normalUser){
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireUser;