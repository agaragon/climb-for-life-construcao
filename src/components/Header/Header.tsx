import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Header.styles";
import InstagramLogo from "../../assets/images/instagram.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <div className="left">
        <ul>
          <li>
            <Link to="/about">SOBRE</Link>
          </li>
          <li>
            <Link to="/about">PROGRAMAS</Link>
          </li>
          <li>
            <Link to="/about">MEDITAÇÃO</Link>
          </li>
        </ul>
      </div>
      <div className="center">
        {/* <InstagramLogo /> */}
        <ul>
          <li className="contact">
            Contato{" "}
            <a href="https://www.instagram.com/climb4life/" target="_blank">
              <img
                className="instagram-logo"
                src={InstagramLogo}
                alt="instagram Logo"
              />
            </a>
          </li>
        </ul>
        <Link to="\">Climb 4 Life</Link>
      </div>
      <div className="right"></div>
    </Container>
  );
};

export default Header;
