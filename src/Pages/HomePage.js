import { useState, useEffect } from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import jasonMain from "../image/jason_1.png";
import jasonLeft from "../image/jason_2.png";
import jasonRight from "../image/jason_3.png";

function HomePage() {
  const [movement, setMovement] = useState("");

  useEffect(() => {
    setMovement("move");
  }, []);

  return (
    <div className="home-page">
      <div className="home-img">
        <img
          className={`jasonLeft ${movement}`}
          src={jasonLeft}
          alt="jasonLeft"
        />
        <img
          className={`jasonMain ${movement}`}
          src={jasonMain}
          alt="jasonMain"
        />
        <img
          className={`jasonRight ${movement}`}
          src={jasonRight}
          alt="jasonRight"
        />
      </div>
      <div className={`home-bar ${movement}`}></div>
      <div className={`home-title ${movement}`}>
        Jason Ma
        <p>Web Developer X Programmer</p>
      </div>
      <div className={`home-contact-btn ${movement}`}>
        <Link to="/contact">
          <button>Contact Me</button>
        </Link>
      </div>
      <div className="icons">
        <Link
          className="icon-holder"
          to={{ pathname: "https://github.com/jasonma1127" }}
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} className={`icon gt ${movement}`} />
        </Link>
        <Link
          className="icon-holder"
          to={{ pathname: "https://www.facebook.com/jason.ma.1297" }}
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className={`icon fb ${movement}`}
          />
        </Link>
        <Link
          className="icon-holder"
          to={{ pathname: "https://jasonmablog.wordpress.com/" }}
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faWordpress}
            className={`icon wp ${movement}`}
          />
        </Link>
        <Link
          className="icon-holder"
          to={{
            pathname:
              "https://www.youtube.com/channel/UCzOVp14LJtd6Go4mpzfNFvw",
          }}
          target="_blank"
        >
          <FontAwesomeIcon icon={faYoutube} className={`icon yt ${movement}`} />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
