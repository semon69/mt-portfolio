import React from 'react';

const Projects = () => {
    return (
        <div className='grid grid-cols-2 gap-5'>
            <div className='border-2 rounded shadow-white shadow-sm'>
                <img className='h-[380px]' src="https://i.ibb.co/QKZsFys/la-masia.png" alt="" />
                <div className='p-5'>
                    <p className='text-3xl pb-3 font-semibold'>La Masia Sports Academy</p>
                    <p className='font-semibold py-3'>This is a sports academy. You can find your favorite sports to learn. There are many instructor to teach you. You can select multiple sports and pay for your selected sports. There are 3 different dashboard for student, instructor and admin. Instructor can add classes. If admin approved these classes it will show in classes page. An admin can set users role.</p>
                    <div className='flex justify-between'>
                        <button className='border-2 px-4 py-2 rounded bg-orange-600 hover:bg-orange-800 text-white font-bold '><a href="">Github Link</a></button>
                        <button className='border-2 px-4 py-2 rounded bg-orange-600 hover:bg-orange-800 text-white font-bold '><a href="">Live Link</a></button>
                    </div>
                </div>
            </div>
            <div className='border-2 rounded shadow-white shadow-sm'>
                <img className='h-[380px]' src="https://i.ibb.co/gVC38QP/toys.png" alt="" />
                <div className='p-5'>
                    <p className='text-3xl pb-3 font-semibold'>Super Hero Toys</p>
                    <p className='font-semibold py-3'>This a toy shop, specially for those who love super heros. They can find there favorite super hero character toy in this shop. Everyone has to login to see toy details. After login, they can add there own toys. They can shop by category like Avengers, Star wars are different pages. They can get discount on top trending toys.</p>
                    <div className='flex justify-between'>
                        <button className='border-2 px-4 py-2 rounded bg-orange-600 hover:bg-orange-800 text-white font-bold '><a href="https://github.com/semon69/Super-hero">Github Link</a></button>
                        <button className='border-2 px-4 py-2 rounded bg-orange-600 hover:bg-orange-800 text-white font-bold '><a href="https://super-heros-27f87.web.app/">Live Link</a></button>
                    </div>
                </div>
            </div>
            <div className='border-2 rounded shadow-white shadow-sm'>
                <img className='h-[380px]' src="https://i.ibb.co/ZmWCDmR/chefs.png" alt="" />
                <div className='p-5'>
                    <p className='text-2xl pb-3 font-semibold'>French Chef's</p>
                    <div className='flex justify-between'>
                        <button className='border-2 px-4 py-2 rounded bg-orange-600 hover:bg-orange-800 text-white font-bold '><a href="">Github Link</a></button>
                        <button className='border-2 px-4 py-2 rounded bg-orange-600 hover:bg-orange-800 text-white font-bold '><a href="">Live Link</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;