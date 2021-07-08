import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allPortfolio } from "../components";

const Latest = () => {
  const [data, setData] = useState([]);

  const sortedData = data
    .sort((a, b) => Number(b.id) - Number(a.id))
    .slice(0, 3);

  useEffect(() => {
    setData(allPortfolio);
  }, [data]);

  return (
    <div className="main-latest__cards">
      <div className="flex-row main-latest__card">
        {sortedData.map((item) => (
          <Link
            to={{ pathname: item.path }}
            target="_blank"
            className="text-no-decor portLink"
            key={item.id}
          >
            <div key={item.id}>
              <h4>{item.title}</h4>
              <h5>{item.subtitle}</h5>
              <img src={item.img} alt="" />
            </div>
          </Link>
        ))}
      </div>
      <br />
      <Link to="/projects" className="main-latest__link">
        All Projects
      </Link>
    </div>
  );
};

export default Latest;
