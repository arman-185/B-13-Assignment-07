import React from 'react';
import logoImg from '../../assets/images/logo.png'
import { NavLink } from 'react-router';
import { Home, Clock, Activity } from 'lucide-react';
import MyNavLink from '../MyNavLink';

const Navbar = () => {
    return (
        <nav className='bg-base-100 border-b border-base-200 shadow-sm'>
            <div className='flex justify-between items-center px-6 py-4 container mx-auto'>
                <img src={logoImg} alt="Keen Keeper logo" className='h-8' />
                <ul className='flex items-center gap-1'>
                    <li>
                        <MyNavLink to={'/'}><Home size={16} />Home</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to={'/timeline'}><Clock size={16} /> Timeline</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to={'/stats'}><Activity size={16} /> Stats</MyNavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;