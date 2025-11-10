'use client';

import React from "react";
import "./testimonials.css"
import { Data } from "./Data";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
    return (
        <section className="testimonials container section" id="testimonials">
            <h2 className="section__title">My clients say</h2>
            <span className="section__subtitle">Testimonial</span>
            <Swiper className="testimonial__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    567: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                }}
                modules={[Pagination]}>
                {Data.map(({ id, image, title, description }) => (
                    <SwiperSlide className="testimonial__card" key={id}>
                        <Image src={image} alt="" className="testimonial__img" width={60} height={60} />
                        <h3 className="testimonial__name">{title}</h3>
                        <p className="testimonial__description">{description}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default Testimonials;

