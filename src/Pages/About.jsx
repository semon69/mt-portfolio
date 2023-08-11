import React from 'react';
import Lottie from "lottie-react";
import anim from '../../public/ani.json'

const About = () => {
    return (
        <div data-aos="fade-up">
            <h2 className="text-4xl text-center mb-8 font-bold italic border-b-4 lg:w-1/4 lg:mx-auto pb-3 text-orange-500 border-b-orange-600 my-10">About Me</h2>
            <div className='lg:flex gap-8 p-2'>
                <div data-aos="fade-right" className='lg:w-1/2 w-full border-2 border-black'>
                    <Lottie animationData={anim} loop={true} />
                </div>
                <div data-aos="fade-left" className='lg:w-1/2 space-y-3'>
                    <p>Hi there! I'm a web developer with a Bachelor's degree in Computer Science and Engineering (CSE). I specialize in HTML, CSS, JavaScript, React, Express, and MongoDB.
                        <br /> <br />
                        I'm skilled in creating web pages using HTML and CSS, making them visually appealing and responsive. I'm also experienced in using Tailwind CSS, a framework that helps me build efficient user interfaces.
                        <br /><br />
                        JavaScript is my go-to language for adding interactivity to websites. I use it to create dynamic and engaging web applications. React is another tool in my arsenal, allowing me to build scalable and interactive web applications by managing components and application state.
                        <br /> <br />
                        On the server-side, I work with Express.js, a framework that enables me to create efficient server applications and handle routing and requests. I'm also familiar with MongoDB, a database system that I use for storing and managing data in web applications.
                        <br /><br />
                        I have worked on several web development projects, both independently and in collaboration with others. These experiences have honed my skills and provided me with practical knowledge in the field.</p>
                        
                        <br />
                        <p className='text-2xl font-bold'>Certification:</p>
                        <p>Complete Web Development With Jhanker Mahbub</p>
                </div>
            </div>
        </div>
    );
};

export default About;