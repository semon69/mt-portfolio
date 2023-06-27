import React from 'react';
import { Link } from 'react-router-dom';

const BestProjects = () => {
    return (
        <div className='my-10'>
            <p className='text-4xl font-bold italic text-center my-8 border-b-orange-600 border-b-4 w-1/4 mx-auto pb-3'>My Best Projects</p>

            <div data-aos="zoom-in-down" className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='border-2 rounded shadow-white shadow-sm'>
                    <img className='h-[380px]' src="https://i.ibb.co/QKZsFys/la-masia.png" alt="" />
                    <div className='p-5'>
                        <p className='text-2xl pb-3 font-semibold'>La Masia Sports Academy</p>
                        <div className='flex justify-between'>
                            <button className='border-2 px-4 py-2 rounded bg-orange-600 hover:bg-orange-800 text-white font-bold '><a href="">Github Link</a></button>
                            <button className='border-2 px-4 py-2 rounded bg-orange-600 hover:bg-orange-800 text-white font-bold '><a href="">Live Link</a></button>
                        </div>
                    </div>
                </div>
                <div className='border-2 rounded shadow-white shadow-sm'>
                    <img className='h-[380px]' src="https://i.ibb.co/gVC38QP/toys.png" alt="" />
                    <div className='p-5'>
                        <p className='text-2xl pb-3 font-semibold'>Super Hero Toys</p>
                        <div className='flex justify-between'>
                            <button className='border-2 px-4 py-2 rounded bg-orange-600 hover:bg-orange-800 text-white font-bold '><a href="https://github.com/semon69/Super-hero">Github Link</a></button>
                            <button className='border-2 px-4 py-2 rounded bg-orange-600 hover:bg-orange-800 text-white font-bold '><a href="https://super-heros-27f87.web.app/">Live Link</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center my-7'>
                <button className='border-2 px-4 py-2 rounded bg-orange-600 hover:bg-orange-800 text-white font-bold '><Link to='/projects'>See All Projects</Link></button>
            </div>
        </div>
    );
};

export default BestProjects;