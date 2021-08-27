import { Link } from "react-router-dom";
import notfound from "../assets/404.svg";

const NotFound = () => {
  return (
    <div className='page-wrapper flex-column not-found'>
      <img src={notfound} alt='' className='not-found-img' />
      <div className='not-found-text'>
        <h1 className='big-heading'>404</h1>
        <h2>Oops, there's nothing here.</h2>
      </div>
      <Link to='/' className='not-found-btn'>
        <div>
          <h3>Back to Home</h3>
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
