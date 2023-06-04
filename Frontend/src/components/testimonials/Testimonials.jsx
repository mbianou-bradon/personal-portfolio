import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./testimonials.css";
import client from "../../api/axios";
import {FadeLoader} from "react-spinners"

const Testimonials = () => {

  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(()=>{
    setIsLoading(true)
    client.get("/api/testimonials")
    .then((response)=>{
      const temp = response.data;
      setData(temp);
      setIsLoading(false)
    })
    .catch((error)=>{
      console.log("Error fetching Testimonial Data:", error.message);
      setIsLoading(false)
    })
    
  },[])




  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      {
        isLoading?
        <div className="testimonial">
          <FadeLoader color="#4db5ff" />
        </div>
        :
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
              <small className="client__review">{item.testimonyBody}</small>
            </SwiperSlide>
          ))}
        </Swiper>
      }
    </section>
  );
};

export default Testimonials;
