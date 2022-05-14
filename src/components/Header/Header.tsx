import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Header.styles";
import InstagramLogoThin from "../../assets/images/InstagramLogoThin";
import WhatsAppLogo from "../../assets/images/WhatsAppLogo";
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
              className="instagram-link"
              href="https://www.instagram.com/climb4life/"
            >
              <InstagramLogoThin />
            </a>
          </li>
          <li>
            <a
              className="whats-app-logo"
              href="https://www.instagram.com/climb4life/"
            >
              <WhatsAppLogo />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Header;
