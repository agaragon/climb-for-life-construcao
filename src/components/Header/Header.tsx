import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Header.styles";
import InstagramLogo from "../../assets/images/instagram.svg";
import Climb4Life from "../../assets/images/C4LLogo";
import C4LLogo from "../../assets/images/C4LLogo";

const Header: React.FC = () => {
  return (
    <Container>
      <div className="left">
        <ul>
          <li>
            <Link className="header-link" to="/about">
              SOBRE
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/about">
              PROGRAMAS
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/about">
              MEDITAÇÃO
            </Link>
          </li>
        </ul>
      </div>
      <div className="center">
        <ul>
          <li>
            <a
              href="https://www.instagram.com/climb4life/"
              target="_blank"
              rel="noreferrer"
              className="instagram-link"
            >
              <C4LLogo />
            </a>
          </li>
        </ul>
      </div>
      <div className="right">
        <ul>
          <li>
            <Link className="header-link" to="\contact">
              CONTATO
            </Link>
          </li>
          <li>
            <a
              className="instagram-link-1"
              href="https://www.instagram.com/climb4life/"
            >
              <img
                className="instagram-logo"
                src={InstagramLogo}
                alt="instagram Logo"
              />
            </a>
          </li>
          <li>
            <a
              className="instagram-link-2"
              href="https://www.instagram.com/climb4life/"
            >
              <img
                className="instagram-logo"
                src={InstagramLogo}
                alt="instagram Logo"
              />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Header;
