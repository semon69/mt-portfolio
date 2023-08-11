import React from 'react';

const Services = () => {
    return (
        <div>
            <h2 className="text-4xl text-center mb-8 font-bold italic border-b-4 mt-16 lg:w-1/4 lg:mx-auto pb-3 text-orange-500 border-b-orange-600 my-10">Services </h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div data-aos="zoom-in-down" className=' p-2 border-2 border-black'>
                    <p className=' text-center font-bold my-6 text-2xl'>Custom Website Development</p>
                    <img className='h-[300px] rounded my-4' src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.2.1536495682.1680942137&semt=ais" alt="" />

                    <p>I specialized in creating custom websites using the MERN stack, tailored to unique requirements. From frontend design to backend development, I deliver high quality, responsive websites that provide an exceptional user experience.</p>
                </div>
                <div data-aos="zoom-in" className=' p-2 border-2 border-black'>
                    <p className=' text-center font-bold my-6 text-2xl'>Responsive Web Design</p>
                    <img className='h-[300px] rounded my-4' src="https://img.freepik.com/free-photo/responsive-design-layout-software-concept_53876-124325.jpg?size=626&ext=jpg&ga=GA1.1.1536495682.1680942137&semt=ais" alt="" />

                    <p>I specialized in creating custom websites using the MERN stack, tailored to unique requirements. From frontend design to backend development, I deliver high quality, responsive websites that provide an exceptional user experience.</p>
                </div>
                <div data-aos="zoom-in-up" className=' p-2 border-2 border-black'>
                    <p className=' text-center rounded my-6 font-bold text-2xl'>Database Integration</p>
                    <img className='h-[300px] w-full rounded my-4' src="https://img.freepik.com/free-vector/analytics-data-science-database-analysis-statistical-report-information-processing-automation-datacenter-expert-making-report-vector-isolated-concept-metaphor-illustration_335657-2781.jpg?size=626&ext=jpg&ga=GA1.1.1536495682.1680942137&semt=sph" alt="" />

                    <p>I specialized in creating custom websites using the MERN stack, tailored to unique requirements. From frontend design to backend development, I deliver high quality, responsive websites that provide an exceptional user experience.</p>
                </div>
            </div>
        </div>
    );
};

export default Services;