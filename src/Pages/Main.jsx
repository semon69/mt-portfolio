import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Main = () => {
    const [color, setColor] = useState(false)

    return (
        <div className={` ${color ? 'bg-white text-black' : 'bg-zinc-900 text-white'} `}>
            <div className='max-w-7xl mx-auto overflow-hidden'>
                <Navbar color={color} setColor={setColor}></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;