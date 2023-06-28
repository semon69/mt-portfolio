import React, { useState } from 'react';
import Banner from './Banner';
import BestProjects from './BestProjects';
import Contact from './Contact';
import Skills from './Skills';

const Home = () => {
    const [theme, setTheme] = useState(false)
    const handleTheme = ()=> {
        setTheme(!theme)
    }
    return (
        <div className={`px-3`}>
            {/* <div className='text-end block'>
                <button className='text-end' onClick={handleTheme}>Click</button>
            </div> */}
            <Banner></Banner>
            <Skills></Skills>
            <BestProjects></BestProjects>
            <Contact></Contact>
        </div>
    );
};

export default Home;