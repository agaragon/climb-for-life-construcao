import React from "react";
import ImageContainer from "components/ImageContainer";
import escaladaHome from "../../assets/images/escalada-home.jpg";
import { Container } from "./Home.styles";
function Home() {
  return (
    <Container>
      <div className="image-container">
        <div className="project-description">
          <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
          <p>
            Animi magni quis odio repellat, expedita sequi, aperiam optio
            facilis totam tenetur mollitia fuga perspiciatis provident iusto
            vero illo. Quibusdam, ullam magni.
          </p>
        </div>
        <ImageContainer className="home-main-image" src={escaladaHome} />
      </div>
      {/* <div className="about">
        <div className="left">
          <h1>Sobre</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            ipsa autem deleniti nostrum quod labore eaque assumenda ipsum
            placeat recusandae dolorem quis ad et possimus voluptatem,
            exercitationem distinctio facere? Ad!
          </p>
        </div>
        <div className="right"></div>
      </div> */}
    </Container>
  );
}

export default Home;
