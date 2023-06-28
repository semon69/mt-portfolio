import React from 'react';
import textEditor from '../assets/images/text editor.png'

const Projects = () => {
    return (
        <div>
            <h2 className="text-4xl text-center mb-8 font-bold italic border-b-4 lg:w-1/4 lg:mx-auto pb-3  border-b-orange-600 my-10">All Projects</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 text-white'>
                <div data-aos="zoom-in-down" className='border-2 rounded shadow-white shadow-sm  my-16'>
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
                <div data-aos="zoom-in-down" className='border-2 rounded shadow-white shadow-sm my-16'>
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
                <div data-aos="zoom-in-down" className='border-2 rounded shadow-white shadow-sm my-16'>
                    <img className='h-[380px]' src="https://i.ibb.co/ZmWCDmR/chefs.png" alt="" />
                    <div className='p-5'>
                        <p className='text-2xl pb-3 font-semibold'>French Chef's</p>
                        <p className='font-semibold py-3'>This a website of french chef's. You can find your favorite chef in your website. Look at our menu. Various kind of europian food you can get at cheap price. You can see blog page where we answered your frequently asked question. You can register or login using your email and password. It gives you error message if something doesn't match our policy.</p>
                        <div className='flex justify-between'>
                            <button className='border-2 px-4 py-2 rounded bg-orange-600 hover:bg-orange-800 text-white font-bold '><a href="https://github.com/semon69/chef-reciepe-client">Github Link</a></button>
                            <button className='border-2 px-4 py-2 rounded bg-orange-600 hover:bg-orange-800 text-white font-bold '><a href="https://chef-recipe-hunter-f7444.web.app/">Live Link</a></button>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in-down" className='border-2 rounded shadow-white shadow-sm my-16'>
                    <img className='h-[380px]' src={textEditor} alt="" />
                    <div className='p-5'>
                        <p className='text-2xl pb-3 font-semibold'>Ms-Word-Lite</p>
                        <p className='font-semibold py-3'>It is a text editor build by me. You can say it, simple clone project of ms word. You can bold, italic, underline text. Here is the option of text alignment like text left, text center, text right. Also here are the option for text sizing, text color and uppercase or lowercase. The technology I used there HTML, Bootstrap and JavaScript(DOM).</p>
                        <div className='flex justify-between'>
                            <button className='border-2 px-4 py-2 rounded bg-orange-600 hover:bg-orange-800 text-white font-bold '><a href="https://github.com/semon69/ms-word-lite/tree/main">Github Link</a></button>
                            <button className='border-2 px-4 py-2 rounded bg-orange-600 hover:bg-orange-800 text-white font-bold '><a href="https://64898ff12d8f1605d461dba1--friendly-pavlova-445001.netlify.app/">Live Link</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;