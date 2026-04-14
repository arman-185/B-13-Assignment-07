import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/shared/Footer';
import Navbar from '../Components/shared/Navbar';


const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;