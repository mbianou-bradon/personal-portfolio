import React from 'react'
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import client from '../../api/axios';
import Loader from '../loader/Loader';

const Experience = () => {
    const [experienceData, setExperienceData] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(()=>{
      setIsLoading(true)
      client.get("/api/experiences")
      .then((response)=>{
        const temp = response.data
        setExperienceData(temp);
        console.log("experienceData:", experienceData);
        setIsLoading(false)
      })
      .catch((error)=>{
        console.log("Fetching Experience data error:", error.message);
        setIsLoading(false)
      })
    },[])

  
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My Experience</h2>
        {
          isLoading? 
          <Loader/>

          :
          <div className="container experience__container">
            {
              experienceData.length > 0 &&
              experienceData.map((exps, index)=> {

                return (
                  <div className="experience__frontend" key={index}>
                    <h3>{exps.title}</h3>
                    <div className="experience__content">
                      {
                        exps.experiences.map((skill, index)=>{
                          return (
                            <article className="experience__details" key={index}>
                              <BsFillPatchCheckFill className="details__icon" />
                              <div>
                                <h4>{skill.title}</h4>
                                <small className="text-light">{skill.skillLevel}</small>
                              </div>
                            </article>
                          )
                        })
                      }
                      
                      
                    </div>
                </div>
                )
              })
                
                    

            }
            
          </div>
}
    </section>

  )
}

export default Experience
