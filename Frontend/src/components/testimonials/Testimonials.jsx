import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./testimonials.css";
import client from "../../api/axios";

const Testimonials = () => {

  const [data, setData] = React.useState([]);

  React.useEffect(()=>{
    client.get("/api/testimonials")
    .then((response)=>{
      const temp = response.data;
      setData(temp);
    })
    .catch((error)=>{
      console.log("Error fetching Testimonial Data:", error.message);
    })
    
  },[data])




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
              <img src={item.userProfile} alt="AVATAR" />
            </div>
            <h5 className="client__name">{item.userName}</h5>
            <small className="client__review">{item.testimomialBody}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
