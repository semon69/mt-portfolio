import React from 'react';

const Banner = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-2 justify-between items-center'>
                <div className='p-3 space-y-9'>
                    <p className='text-9xl italic'>Hello! I'm</p>
                    <p className='text-7xl italic'>MD EMON SHEIKH</p>

                    <p className='text-xl'>Software/Web Developer</p>
                    <button className='border-2 px-4 py-2 rounded bg-orange-600 hover:bg-orange-800 text-white font-bold'><a href="https://drive.google.com/file/d/1MvVp-REX6uKsKlrQcDN1CbBs8tvwFLZD/view?usp=sharing">Get Resume</a></button>
                </div>
                <div>
                    <img className='h-[600px] lg:ms-10' src="https://i.ibb.co/w6LRDPs/emon.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;