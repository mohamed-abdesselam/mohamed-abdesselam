'use client';

import React, { useEffect } from "react";
import "./scrollUp.css"

const ScrollUp = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollUp = document.querySelector(".scrollup");
            if (window.scrollY >= 560) {
                scrollUp?.classList.add("show__scroll");
            } else {
                scrollUp?.classList.remove("show__scroll");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <a href="#" className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    );
}

export default ScrollUp;

