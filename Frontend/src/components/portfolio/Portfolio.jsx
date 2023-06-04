import React from "react";
import "./portfolio.css";
import client from "../../api/axios";
import { FadeLoader } from "react-spinners";

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(()=>{
    setIsLoading(true);
    client.get("/api/projects")
    .then((response)=>{
      const temp = response.data
      setIsLoading(false)
      setPortfolioData(temp);
      console.log("portfolioData:",portfolioData);
    })
    .catch((error)=>{
      console.log("Fetching Project Error:", error);
      setIsLoading(false)

    })
  },[])


  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          isLoading?
          <div className="">
            <FadeLoader color="#4db5ff" />
          </div>
          :
          portfolioData.length > 0 &&

          portfolioData.map((item) => (
            <article className="portfolio__item" key={item._id}>
              <div className="portfolio__item-image">
                <img src={item.images} alt="" />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio__item-cta">
                <a href={item.githubLink} className="btn" target="_blank" rel="noreferrer">
                  Github
                </a>
                <a href={item.liveLink} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;