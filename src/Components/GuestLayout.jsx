import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../context/contextprovider';

function GuestLayout() {
    const { token } = useStateContext();
     
    if (token) {
        return <Navigate to="/home" />;
    }

    return (
        <div>
            <Outlet />
        </div>
    );
}

export default GuestLayout;
