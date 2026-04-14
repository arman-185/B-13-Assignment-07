import React from 'react';
import logoImg from '../../assets/images/logo.png'
import { Link } from 'react-router';
import { Home, Clock, Activity } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className='bg-base-100 border-b border-base-200 shadow-sm'>
            <div className='flex justify-between items-center px-6 py-2 container mx-auto'>
                <img src={logoImg} alt="Keen Keeper logo" className='h-8' />
                <ul className='flex items-center gap-1'>
                    <li>
                        <Link to={'/'} className='btn btn-sm bg-[#244D3F] text-white border-none hover:bg-black gap-2'>
                            <Home size={16} /> Home
                        </Link>
                    </li>
                    <li>
                        <Link to={'/timeline'} className='btn btn-sm btn-ghost text-base-content/50 gap-2'>
                            <Clock size={16} /> Timeline
                        </Link>
                    </li>
                    <li>
                        <Link to={'/stats'} className='btn btn-sm btn-ghost text-base-content/50 gap-2'>
                            <Activity size={16} /> Stats
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;