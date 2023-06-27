import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript1 } from 'react-icons/di';
import { SiTailwindcss, } from 'react-icons/si';

const Skills = () => {
    return (
        <div className='my-20'>
            <h2 className="text-4xl text-center mb-8 font-bold italic border-b-4 w-1/4 mx-auto pb-3  border-b-orange-600 my-10">My Skills</h2>
            <div className='grid grid-cols-3 justify-between gap-5'>
                <div className='border p-4 text-center'>
                    <p className='text-blue-600 inline-flex items-center text-2xl'><AiFillHtml5 /> </p>
                    <p>HTML</p>
                    <progress className="progress progress-warning bg-white w-56" value="100" max="100"></progress>
                </div>
                <div className='border p-4 text-center'>
                    <p className='inline-flex items-center text-2xl'><DiCss3 /> </p>
                    <p>CSS</p>
                    <progress className="progress progress-warning bg-white w-56" value="90" max="100"></progress>
                </div>
                <div className='border p-4 text-center'>
                    <p className='inline-flex items-center text-2xl'><DiJavascript1 /> </p>
                    <p>JavaScript</p>
                    <progress className="progress progress-warning bg-white w-56" value="70" max="100"></progress>
                </div>
                <div className='border p-4 text-center'>
                    <p className='inline-flex items-center text-2xl'><SiTailwindcss /> </p>
                    <p>TailwindCSS</p>
                    <progress className="progress progress-warning bg-white w-56" value="100" max="100"></progress>
                </div>
                <div className='border p-4 text-center'>
                    <p className='inline-flex items-center text-2xl'><DiCss3 /> </p>
                    <p>CSS</p>
                    <progress className="progress progress-warning bg-white w-56" value="90" max="100"></progress>
                </div>
                <div className='border p-4 text-center'>
                    <p className='inline-flex items-center text-2xl'><DiJavascript1 /> </p>
                    <p>JavaScript</p>
                    <progress className="progress progress-warning bg-white w-56" value="70" max="100"></progress>
                </div>
                <div className='border p-4 text-center'>
                    <p className='inline-flex items-center text-2xl'><AiFillHtml5 /> </p>
                    <p>HTML</p>
                    <progress className="progress progress-warning bg-white w-56" value="100" max="100"></progress>
                </div>
                <div className='border p-4 text-center'>
                    <p className='inline-flex items-center text-2xl'><DiCss3 /> </p>
                    <p>CSS</p>
                    <progress className="progress progress-warning bg-white w-56" value="90" max="100"></progress>
                </div>
                <div className='border p-4 text-center'>
                    <p className='inline-flex items-center text-2xl'><DiJavascript1 /> </p>
                    <p>JavaScript</p>
                    <progress className="progress progress-warning bg-white w-56" value="70" max="100"></progress>
                </div>
            </div>
        </div>
    );
};

export default Skills;