import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='mb-24'>
            <div className='h-20 py-5 fixed w-full bg-black bg-opacity-30 top-0 left-0'>
                <div className='grid grid-cols-2 justify-between items-center max-w-7xl mx-auto'>
                    <img className='w-28' src="https://i.ibb.co/RN9Pdgb/logo.jpg" alt="" />
                    <div className='flex justify-around text-xl font-semibold'>
                        <p><Link to='/'>Home</Link></p>
                        <p><Link to='/projects'>Projects</Link></p>
                        <p><Link to='/blog'>Blog</Link></p>
                        <p><Link to='/contact'>Contact Me</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;