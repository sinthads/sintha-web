import dp from "../assets/dp.png";
import { Latest } from "../components";

const Main = () => {
  return (
    <main className="page-wrapper main-page">
      <div className="main-card">
        <div className="ava-container">
          <img src={dp} alt="" />
        </div>
        <div className="intro">
          <h2>Sintha Dwiferma Sinurat</h2>
          <h3>
            <span>JavaScript</span> Developer
          </h3>
          <p>
            I'm learning JavaScript. I am building user interfaces components
            using React.js. On the back-end, I use Express.js, a framework for
            Node.js. I use React-Native for mobile applications.
          </p>
        </div>
      </div>
      <div className="main-latest">
        <h3>Latest</h3>
        <hr />
        <Latest />
      </div>
    </main>
  );
};

export default Main;
