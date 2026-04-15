import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/shared/Navbar';
import Footer from '../Components/shared/Footer';

const RootLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            
            <div className="flex-grow">
                <Outlet />
            </div>
            
            <Footer />
        </div>
    );
};

export default RootLayout;