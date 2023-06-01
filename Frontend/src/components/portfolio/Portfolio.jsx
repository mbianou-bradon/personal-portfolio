import React from "react";
import "./portfolio.css";
import fetchData from "../../api/fetchFunction";


const Portfolio = () => {
  const [portfolioData, setPortfolioData] = React.useState([])

  React.useEffect(()=>{
    fetchData("/api/projects")
    .then((response)=>{
      const temp = response.data

      setPortfolioData(temp);
    })
    .catch((error)=>{
      console.log("Fetching Project Error:", error);
    })
  },[])


  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData.map((item) => (
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