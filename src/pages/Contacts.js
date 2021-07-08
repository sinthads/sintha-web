import { FaLinkedinIn, FaRegEnvelope, FaGithub } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="page-wrapper contact-page">
      <h2>Get in touch</h2>
      <div className="flex-column contacts">
        <div className="contact-item">
          <h4>
            <FaRegEnvelope />
          </h4>
          <p>Email:</p>
          <p>sintha.sinurat@gmail.com</p>
        </div>
        <div className="contact-item">
          <h4>
            <FaLinkedinIn />
          </h4>
          <p>LinkedIn:</p>
          <p>linkedin.com/in/sinthads</p>
        </div>
        <div className="contact-item">
          <h4>
            <FaGithub />
          </h4>
          <p>Github:</p>
          <p>github.com/sinthads</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
