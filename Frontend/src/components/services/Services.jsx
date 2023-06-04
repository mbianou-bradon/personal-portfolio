import React from 'react'
import "./services.css";
import { BiCheck } from "react-icons/bi";
import client from '../../api/axios';
import Loader from '../loader/Loader';

const Services = () => {
  const [serviceData, setServiceData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(()=>{
    setIsLoading(true)
    client.get("/api/services")
    .then((response)=>{
      const temp = response.data
      console.log("services data:",temp)
      setServiceData(temp)
      setIsLoading(false)
    })
    .catch((error)=>{
      console.log("Fetching services data error:", error.message)
      setIsLoading(false)
    })
  },[])


  return (
        <section id="services">
      <h5>What I can offer</h5>
      <h2>Sevices</h2>

      { 
      isLoading? 
          <Loader/>

          :
          <div className="services__container">
            {
            
              serviceData.map((service, index)=> {
                return (
                  <article className="service" key={index}>
                    <div className="service__head">
                      <h3>{service.title}</h3>
                    </div>
                    <ul className="service__list">
                      {
                        service.description.map((desc, index)=>{
                          return (
                            <li key={index}>
                              <BiCheck className="service__list-icon" />
                              <p>{desc}</p>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </article>
                )
              })
              
            }
            
          </div>
        }
    </section>

  )
}

export default Services
