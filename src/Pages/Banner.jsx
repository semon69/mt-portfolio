import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Banner = () => {

    const handleType = (count) => {
        console.log(count)
    }

    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    return (
        <div className=''>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-between items-center'>
                <div data-aos="fade-right" className='p-3 space-y-9'>
                    <p className='text-9xl italic'>Hello! I'm</p>
                    <p className='text-7xl italic'>MD EMON SHEIKH</p>

                    {/* <p className='text-xl'>Software/Web Developer</p> */}
                    <h1 className='text-2xl text-white'>
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
                    <img className='h-[600px] lg:ms-10' src="https://i.ibb.co/w6LRDPs/emon.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;