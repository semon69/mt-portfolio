import React, { useState, useEffect } from "react";
import { FaArrowAltCircleUp  } from "react-icons/fa";

const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            onClick={scrollToTop}
            className="h-10 w-10 rounded-full flex items-center justify-center hover:scale-125 cursor-pointer"
            style={{
                position: "fixed",
                bottom: "2rem",
                right: "2rem",
                display: showButton ? "flex" : "none",
                backgroundColor: "white",
            }}
        >
            <FaArrowAltCircleUp  className="text-orange-600 text-4xl" />
        </div>
    );
};

export default ScrollToTop;