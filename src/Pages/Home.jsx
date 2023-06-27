import React from 'react';
import Banner from './Banner';
import BestProjects from './BestProjects';
import Contact from './Contact';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <BestProjects></BestProjects>
            <Contact></Contact>
        </div>
    );
};

export default Home;