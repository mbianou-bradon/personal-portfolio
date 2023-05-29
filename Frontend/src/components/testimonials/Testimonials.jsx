import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import { data } from "./testimonialData";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        autoplay={true}
        spaceBetween={40}
        slidesPerView={1}
        className="container testimonials__container"
      >
        {data.map((item) => (
          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={item.avatar} alt="AVATAR" />
            </div>
            <h5 className="client__name">{item.name}</h5>
            <small className="client__review">{item.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
