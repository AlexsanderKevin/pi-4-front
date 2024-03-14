import React from 'react';
import isValidToken from './verifyToken';
import { Outlet, Navigate } from 'react-router-dom';
import { setAuthToken } from '../Helper/setAuthToken';

const RouteGuard = () => {

    async function hasJWT() {
        let flag = false;

        localStorage.getItem("token") ? flag=true : flag=false

        if (flag) {
            const validToken = await isValidToken(localStorage.getItem("token"))

            if (!validToken)
                setAuthToken(null)
        }
        
        return flag
    }

    return hasJWT() ? <Outlet /> : <Navigate to="/login" />
};

export default RouteGuard;