import React from 'react';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <h2>navbar</h2>
            <Outlet />
            <h2>footer</h2>
        </div>
    );
};

export default RootLayout;