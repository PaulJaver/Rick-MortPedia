import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className="footer pt-4">
      <article className="container ">
        <div className="row ">
          <div className="col-4 d-flex justify-content-center">
            <p>algo mas</p>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <p>mas cosas</p>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="noreferrer"
              className="text-light"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="me-2 turn what"
                title="WhatsApp"
                size="2x"
              ></FontAwesomeIcon>
            </a>
            <a
              href="https://github.com/PaulJaver"
              target="_blank"
              rel="noreferrer"
              className="text-light ms-3"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="me-2 turn git"
                size="2x"
                title="GitHub"
              ></FontAwesomeIcon>
            </a>
            <a
              href="p"
              target="_blank"
              rel="noreferrer"
              className="text-light ms-3"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="me-2 turn linked"
                size="2x"
                title="LinkedIn"
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Footer;
