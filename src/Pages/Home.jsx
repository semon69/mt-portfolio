import React, { useState } from 'react';
import Banner from './Banner';
import BestProjects from './BestProjects';
import Contact from './Contact';
import Skills from './Skills';
import Services from './Services';
import About from './About';

const Home = () => {
    const [theme, setTheme] = useState(false)
    const handleTheme = ()=> {
        setTheme(!theme)
    }
    return (
        <div className={`px-3`}>
            <Banner></Banner>
             <About></About>
            <Skills></Skills>
            <BestProjects></BestProjects>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;