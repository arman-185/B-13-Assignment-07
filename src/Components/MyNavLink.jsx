import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({ to, children }) => {
    return (
        <NavLink to={to} className={({ isActive }) => isActive ? "btn btn-sm bg-[#244D3F] text-white border-none hover:bg-black gap-2" : "btn btn-sm btn-ghost text-base-content/50 gap-2"}>
            {children}
        </NavLink>
    );
};

export default MyNavLink;