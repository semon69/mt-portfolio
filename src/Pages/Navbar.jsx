import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaDownload, FaFileDownload } from 'react-icons/fa';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const downloadPDF = () => {
        const fileURL = 'https://drive.google.com/uc?export=download&id=1XCOvvoV26pSu-CDKDbGU5YRctyihpJdU';
        window.location.href = fileURL;
    };

    const routes = <>
        <p><NavLink className={({ isActive }) => isActive ? "text-white font-bold" : ""} to='/'>Home</NavLink></p>
        <p><NavLink className={({ isActive }) => isActive ? "text-white font-bold" : ""} to='/projects'>Projects</NavLink></p>
        <p><NavLink className={({ isActive }) => isActive ? "text-white font-bold" : ""} to='/blog'>Blog</NavLink></p>
        <p><NavLink className={({ isActive }) => isActive ? "text-white font-bold" : ""} to='/contact'>Contact Me</NavLink></p>
        <p><NavLink onClick={downloadPDF} className='inline-flex items-center gap-2 border-2 px-4 py-2 rounded bg-orange-600 hover:bg-orange-800 text-white font-bold '>  <FaFileDownload />  Resume</NavLink></p>
    </>

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className='mb-56 lg:mb-24'>
            <div className='h-20 py-5 fixed w-full bg-black bg-opacity-30 top-0 left-0'>
                <div className='max-w-7xl mx-auto px-8'>
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <a href="#" className="flex items-center">
                                <span className="text-white text-lg font-semibold"><img className='w-28' src="https://i.ibb.co/RN9Pdgb/logo.jpg" alt="" /></span>
                            </a>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-16">
                                {routes}
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button
                                type="button"
                                onClick={toggleMenu}
                                className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    {menuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-around text-xl font-semibold'>

                        {menuOpen && (
                            <div className="md:hidden">
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
                                    {routes}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;