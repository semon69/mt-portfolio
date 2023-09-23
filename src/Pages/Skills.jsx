import React, { useEffect, useState } from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiJavascript1 } from 'react-icons/di';
import { SiTailwindcss, SiMongodb, SiExpress, SiJavascript } from 'react-icons/si';
import { FaBootstrap, FaReact, FaNodeJs } from 'react-icons/fa';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
    const [skills, setSkills] = useState([])
    console.log(skills);
    useEffect(() => {
        fetch("/skills.json")
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])
    return (
        <div className='my-20'>
            <h2 className="text-4xl text-center mb-8 font-bold italic border-b-4 lg:w-1/4 lg:mx-auto pb-3 text-orange-500 border-b-orange-600 my-10">My Skills</h2>
            {/* <div className='grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-5 text-black'>
                <div data-aos="fade-up-right" className='border-2 border-black shadow-xl p-4 text-center rounded space-y-3 bg-white   hover:animate-bounce'>
                    <p className='text-blue-600 inline-flex items-center text-4xl'><AiFillHtml5 /> </p>
                    <p>HTML</p>
                    <CircularProgressbar
                        className='w-44 h-40'
                        value={90}
                        text={`${90}%`}
                        styles={buildStyles({
                            textColor: '#FF6600',
                            trailColor: '#36454F',
                            pathColor: '#FF6600'
                        })}
                    />
                </div>
                <div data-aos="fade-up" className='border-2 border-black shadow-xl p-4 text-center rounded space-y-3 bg-white   hover:animate-bounce'>
                    <p className='inline-flex items-center text-4xl text-blue-600'><DiCss3 /> </p>
                    <p>CSS</p>
                    <CircularProgressbar
                        className='w-44 h-40'
                        value={80}
                        text={`${80}%`}
                        styles={buildStyles({
                            textColor: '#FF6600',
                            trailColor: '#36454F',
                            pathColor: '#FF6600'
                        })} />
                </div>
                <div data-aos="fade-up-left" className='border-2 border-black shadow-xl p-4 text-center rounded space-y-3 bg-white text-orange-500  hover:animate-bounce'>
                    <p className='inline-flex items-center text-4xl'><SiJavascript /> </p>
                    <p>JavaScript</p>
                    <CircularProgressbar
                        className='w-44 h-40'
                        value={70}
                        text={`${70}%`}
                        styles={buildStyles({
                            textColor: '#FF6600',
                            trailColor: '#36454F',
                            pathColor: '#FF6600'
                        })} />
                </div>
                <div data-aos="fade-up-right" className='border-2 border-black shadow-xl p-4 text-center rounded space-y-3 bg-white   hover:animate-bounce'>
                    <p className='inline-flex items-center text-4xl text-blue-400'><SiTailwindcss /> </p>
                    <p>TailwindCSS</p>
                    <CircularProgressbar
                        className='w-44 h-40'
                        value={80}
                        text={`${80}%`}
                        styles={buildStyles({
                            textColor: '#FF6600',
                            trailColor: '#36454F',
                            pathColor: '#FF6600'
                        })} />
                </div>
                <div data-aos="fade-up" className='border-2 border-black shadow-xl p-4 text-center rounded space-y-3 bg-white   hover:animate-bounce'>
                    <p className='inline-flex items-center text-4xl text-purple-600'><FaBootstrap /> </p>
                    <p>Bootstrap</p>
                    <CircularProgressbar
                        className='w-44 h-40'
                        value={85}
                        text={`${85}%`}
                        styles={buildStyles({
                            textColor: '#FF6600',
                            trailColor: '#36454F',
                            pathColor: '#FF6600'
                        })} />
                </div>
                <div data-aos="fade-up-left" className='border-2 border-black shadow-xl p-4 text-center rounded space-y-3 bg-white   hover:animate-bounce'>
                    <p className='inline-flex items-center text-4xl text-blue-400'><FaReact /> </p>
                    <p>ReactJS</p>
                    <CircularProgressbar
                        className='w-44 h-40'
                        value={70}
                        text={`${70}%`}
                        styles={buildStyles({
                            textColor: '#FF6600',
                            trailColor: '#36454F',
                            pathColor: '#FF6600'
                        })} />
                </div>
                <div data-aos="fade-up-right" className='border-2 border-black shadow-xl p-4 text-center rounded space-y-3 bg-white   hover:animate-bounce'>
                    <p className='inline-flex items-center text-4xl text-green-700'><SiMongodb /> </p>
                    <p>MongoDB</p>
                    <CircularProgressbar
                        className='w-44 h-40'
                        value={60}
                        text={`${60}%`}
                        styles={buildStyles({
                            textColor: '#FF6600',
                            trailColor: '#36454F',
                            pathColor: '#FF6600'
                        })} />
                </div>
                <div data-aos="fade-up" className='border-2 border-black shadow-xl p-4 text-center rounded space-y-3 bg-white   hover:animate-bounce'>
                    <p className='inline-flex items-center text-4xl text-black'><SiExpress /> </p>
                    <p>ExpressJS</p>
                    <CircularProgressbar
                        className='w-44 h-40'
                        value={50}
                        text={`${50}%`}
                        styles={buildStyles({
                            textColor: '#FF6600',
                            trailColor: '#36454F',
                            pathColor: '#FF6600'
                        })} />
                </div>
                <div data-aos="fade-up-left" className='border-2 border-black shadow-xl p-4 text-center rounded space-y-3 bg-white   hover:animate-bounce'>
                    <p className='inline-flex items-center text-4xl text-green-700'><FaNodeJs /> </p>
                    <p>NodeJS</p>
                    <CircularProgressbar
                        className='w-44 h-40'
                        value={40}
                        text={`${40}%`}
                        styles={buildStyles({
                            textColor: '#FF6600',
                            trailColor: '#36454F',
                            pathColor: '#FF6600'
                        })} />
                </div>
            </div> */}

            <div className='grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    skills.map(skill =>
                        <div className='text-center my-3' key={skill.id}>
                            <div className='inline-flex justify-center items-center border bg-white w-44 h-44 rounded-full p-2 hover:scale-110'>
                                <img className='w-32 h-32' src={skill.image} alt="" />
                            </div>
                            <p className='text-2xl fw-bold pt-3'>{skill.name}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Skills;