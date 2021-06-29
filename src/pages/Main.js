import dp from "../assets/dp.png";

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
            Node.js. For mobile applications, I use React Native.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
