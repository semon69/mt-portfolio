import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Banner = () => {

    const handleType = (count) => {
        console.log(count)
    }

    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    return (
        <div data-aos="fade-up">
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-between items-center text-orange-500'>
                <div data-aos="fade-left" className='p-3 space-y-9'>
                    <p className='text-7xl lg:text-9xl italic mt-20 lg:mt-5'>Hello! I'm</p>
                    <p className='text-4xl lg:text-7xl italic'>MD EMON SHEIKH</p>
                    <h1 className='text-2xl '>
                        {' '}
                        <span>
                            <Typewriter
                                words={['Software Developer', 'Web Developer', 'Frontend Developer', 'MERN-Stack Developer']}
                                loop={5}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                onLoopDone={handleDone}
                                onType={handleType}
                            />
                        </span>
                    </h1>
                    <button className='border-2 px-4 py-2 rounded bg-orange-600 hover:bg-orange-800 text-white font-bold'><a href="https://drive.google.com/file/d/1XCOvvoV26pSu-CDKDbGU5YRctyihpJdU/view?usp=sharing">Get Resume</a></button>
                </div>
                <div data-aos="fade-left">
                    <img className='md:h-[600px] h-[400px] lg:ms-10' src="https://i.ibb.co/w6LRDPs/emon.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;