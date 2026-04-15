import React from 'react';
import facebookIcon from './FooterImages/facebook.png';
import instagramIcon from './FooterImages/instagram.png';
import twitterIcon from './FooterImages/twitter.png';
import logo from './FooterImages/logo-xl.png';

const Footer = () => {
    return (
        <footer className="w-full bg-[#1B4F3D] text-white text-center py-8 flex flex-col items-center gap-4 font-sans">

            {/* Brand Section */}
            <div className="flex flex-col items-center gap-1">
                {/* FIXED: Changed w-50 to w-32 (or you can use w-[200px] for exact pixels) */}
                <img className='w-32 object-contain' src={logo} alt="KeenKeeper Logo" />
                <p className="text-[15px] opacity-80 leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center gap-2">
                <span className="text-[20px] uppercase tracking-widest opacity-70">Social Links</span>
                <div className="flex gap-3">
                    <img
                        src={facebookIcon}
                        alt="Facebook"
                        className="w-8 h-8 rounded-full bg-white/10 p-1.5 cursor-pointer hover:bg-white/20 transition"
                    />
                    <img
                        src={instagramIcon}
                        alt="Instagram"
                        className="w-8 h-8 rounded-full bg-white/10 p-1.5 cursor-pointer hover:bg-white/20 transition"
                    />
                    <img
                        src={twitterIcon}
                        alt="Twitter"
                        className="w-8 h-8 rounded-full bg-white/10 p-1.5 cursor-pointer hover:bg-white/20 transition"
                    />
                </div>
            </div>

            {/* Legal Info */}
            <div className="flex flex-col gap-1 opacity-60 text-[10px]">
                <p>©2024 KeenKeeper. All rights reserved.</p>
                <div className="flex gap-3">
                    <a href="#" className="hover:opacity-100 transition">Privacy Policy</a>
                    <span>•</span>
                    <a href="#" className="hover:opacity-100 transition">Terms of Service</a>
                    <span>•</span>
                    <a href="#" className="hover:opacity-100 transition">Cookie</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;