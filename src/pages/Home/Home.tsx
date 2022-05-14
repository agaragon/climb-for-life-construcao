import React from "react";
import ImageContainer from "components/ImageContainer";
import escaladaHome from "../../assets/images/escalada-home.jpg";
import { Container } from "./Home.styles";
function Home() {
  return (
    <Container>
      <ImageContainer className="home-main-image" src={escaladaHome} />
    </Container>
  );
}

export default Home;
