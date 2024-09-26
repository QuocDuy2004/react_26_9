import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../Landing';
import Home from '../Home';
import Login from '../views/auth/Login';
import Register from '../views/auth/Register';
import GuestLayout from '../Components/GuestLayout';
import DefaultLayout from '../Components/DefaultLayout';
import Forgot from '../views/auth/Forgot';

const Main = () => {
    return (
        <Routes>
            <Route element={<GuestLayout />}>
                <Route path="/" element={<Landing />} /> 
                <Route path="/auth/login" element={<Login />} /> 
                <Route path="/auth/register" element={<Register />} /> 
                <Route path="/auth/forgot" element={<Forgot />} /> 
            </Route>

            <Route element={<DefaultLayout />}>
                <Route path="/home" element={<Home />} />
            </Route>
        </Routes>
    );
};

export default Main;
