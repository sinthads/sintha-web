import { FaLinkedinIn, FaRegEnvelope, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div className="page-wrapper contact-page">
      <h2>Get in touch</h2>
      <div className="flex-column contacts">
        <div className="contact-item">
          <Link
            to={{ pathname: "mailto:sintha.sinurat@gmail.com" }}
            target="_blank"
            className="text-no-decor portLink"
          >
            <h4>
              <FaRegEnvelope />
            </h4>
            <p>Email:</p>
            <p>sintha.sinurat@gmail.com</p>
          </Link>
        </div>
        <div className="contact-item">
          <Link
            to={{ pathname: "https://linkedin.com/in/sinthads" }}
            target="_blank"
            className="text-no-decor portLink"
          >
            <h4>
              <FaLinkedinIn />
            </h4>
            <p>LinkedIn:</p>
            <p>linkedin.com/in/sinthads</p>
          </Link>
        </div>
        <div className="contact-item">
          <Link
            to={{ pathname: "https://github.com/sinthads" }}
            target="_blank"
            className="text-no-decor portLink"
          >
            <h4>
              <FaGithub />
            </h4>
            <p>Github:</p>
            <p>github.com/sinthads</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
