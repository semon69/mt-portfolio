import React, { useEffect, useState } from "react";
import {
  FaBeer,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";
import "./Main.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const templateParams = {
  //     name,
  //     email,
  //     message,
  //   };

  //   emailjs
  //     .send(
  //       "service_3tc3p99",
  //       "template_kr4gohr",
  //       templateParams,
  //       "B9G_EgR6kzlvxVU2U"
  //     )
  //     .then((response) => {
  //       console.log("Email sent successfully!", response.status, response.text);
  //       event.target.reset();
  //     })
  //     .catch((error) => {
  //       console.error("Error sending email:", error);
  //     });

  //   setName("");
  //   setEmail("");
  //   setMessage("");
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      to_name: "Md Emon Sheikh",    // Replace with the recipient’s name or keep as a default
      from_name: name,           // Sender's name input
      from_email: email,         // Sender's email input
      message: message           // The message content
    };

    emailjs
      .send(
        "service_3tc3p99",    
        "template_kr4gohr",    
        templateParams,
        "B9G_EgR6kzlvxVU2U"      
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        event.target.reset();   // Reset form fields after submission
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="pt-28 md:pt-8">
      <section className="rounded-md">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl text-center text-orange-500 mb-8 font-bold italic border-b-4 lg:w-1/4 lg:mx-auto pb-3  border-b-orange-600">
            Reach Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="" data-aos="zoom-in-right">
              <div className="mt-12 mb-10 text-orange-500">
                <h3 className="text-3xl font-semibold mb-2">Find Me On</h3>
                <p className="">Feel free to contact</p>
              </div>
              <div className="mb-14 space-y-4">
                <p className="flex items-center gap-2 text-3xl">
                  <MdEmail /> smdemon3@gmail.com
                </p>
                <p className="flex items-center gap-2 text-3xl">
                  <FaPhoneAlt /> +8801817855902
                </p>
              </div>
              <div className="flex gap-9 text-5xl text-orange-500">
                <p>
                  <a href="https://web.facebook.com/smdemon2k17">
                    <FaFacebook />
                  </a>
                </p>
                <p>
                  <a href="https://www.instagram.com/sheikh_emon69/">
                    <FaInstagram />
                  </a>
                </p>
                <p>
                  <a href="https://www.linkedin.com/in/md-emon-sheikh-508891227/">
                    <FaLinkedin />{" "}
                  </a>
                </p>
                <p>
                  <a href="https://github.com/semon69">
                    <FaGithub></FaGithub>
                  </a>
                </p>
              </div>
            </div>
            <div data-aos="zoom-in-right" className="">
              <h3 className="text-xl font-semibold mb-2">Send me a Message</h3>
              <form onSubmit={handleSubmit} className="max-w-md">
                <div className="mb-4">
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <input
                    className="border border-gray-300 rounded-md py-2 px-3 w-full text-black"
                    type="text"
                    id="name"
                    name="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block  text-sm font-medium mb-2"
                    htmlFor="email"
                  >
                    Your Email
                  </label>
                  <input
                    className="border border-gray-300 rounded-md py-2 px-3 w-full text-black"
                    type="email"
                    id="email"
                    name="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block  text-sm font-medium mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="border border-gray-300 rounded-md py-2 px-3 w-full h-32 text-black"
                    id="message"
                    name="message"
                    required
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button
                  className="border-2 px-4 py-2 rounded local-btn text-white font-bold "
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
