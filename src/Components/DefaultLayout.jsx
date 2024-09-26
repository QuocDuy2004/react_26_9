import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../context/contextprovider';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';

function DefaultLayout() {
    const { token } = useStateContext();

    if (!token) {
        return <Navigate to="/auth/login" />;
    }

    return (
        <div>
            <Header />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
