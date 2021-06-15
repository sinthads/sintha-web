import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PortfolioList, allPortfolio } from "../components";

const Projects = () => {
  const [category, setCategory] = useState("all");
  const [data, setData] = useState([]);

  const categoryList = [
    { id: "all", title: "All" },
    { id: "landing", title: "Landing Pages" },
    { id: "web", title: "Web App" },
    { id: "mobile", title: "Mobile App" },
  ];

  useEffect(() => {
    const landing = allPortfolio.filter((item) => item.categoryId === 1);
    const web = allPortfolio.filter((item) => item.categoryId === 2);
    const mobile = allPortfolio.filter((item) => item.categoryId === 3);

    switch (category) {
      case "all":
        setData(allPortfolio);
        break;
      case "landing":
        setData(landing);
        break;
      case "web":
        setData(web);
        break;
      case "mobile":
        setData(mobile);
        break;
      default:
        setData(allPortfolio);
    }
  }, [category]);

  return (
    <div className="project-page">
      <h2>Projects</h2>
      <ul>
        {categoryList.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            id={item.id}
            // active={category === item.id}
            setCategory={setCategory}
          />
        ))}
      </ul>
      <div className="project-overview">
        {data.map((value) => (
          <Link to={{ pathname: value.path }} target="_blank">
            <div key={value.id}>
              <h4>{value.title}</h4>
              <h5>{value.subtitle}</h5>
              <img src={value.img} alt="" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
