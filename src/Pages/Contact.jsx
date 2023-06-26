import React from 'react';
import { FaBeer, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <section className="rounded-md py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl text-center mb-8 font-bold italic border-b-4 w-1/4 mx-auto pb-3  border-b-orange-600">Contact Me</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <div className='mt-12 mb-10'>
                                <h3 className="text-3xl font-semibold mb-2">Find Me On</h3>
                                <p className="text-white">Feel free to contact</p>
                            </div>
                            <div className='flex gap-9 text-5xl'>
                                <p><a href="https://web.facebook.com/smdemon2k17"><FaFacebook /></a></p>
                                <p><a href="https://www.instagram.com/sheikh_emon69/"><FaInstagram /></a></p>
                                <p><a href="https://www.linkedin.com/in/md-emon-sheikh-508891227/"><FaLinkedin /> </a></p>
                                <p><a href="https://github.com/semon69"><FaGithub></FaGithub></a></p>
                            </div>
                        </div>
                        <div data-aos="fade-up">
                            <h3 className="text-xl font-semibold mb-2">Send me a Message</h3>
                            <form className="max-w-md">
                                <div className="mb-4">
                                    <label className="block text-white text-sm font-medium mb-2" htmlFor="name">Your Name</label>
                                    <input className="border border-gray-300 rounded-md py-2 px-3 w-full" type="text" id="name" name="name" required />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-white text-sm font-medium mb-2" htmlFor="email">Your Email</label>
                                    <input className="border border-gray-300 rounded-md py-2 px-3 w-full" type="email" id="email" name="email" required />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-white text-sm font-medium mb-2" htmlFor="message">Message</label>
                                    <textarea className="border border-gray-300 rounded-md py-2 px-3 w-full h-32" id="message" name="message" required></textarea>
                                </div>
                                <button className="border-2 px-4 py-2 rounded bg-orange-600 hover:bg-orange-800 text-white font-bold " type='submit'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;