import styled from "styled-components";
import { mainFont } from "../../globals";

export const Container = styled.div`
  width: 100%;
  .image-container {
    width: 100%;
    position: relative;
    .home-main-image {
      position: absolute;
      width: 100%;
      height: 600px;
      object-fit: cover;
      object-position: 0 0;
      z-index: 0;
    }
    .project-description {
      color: #ffffff;
      position: absolute;
      width: 20rem;
      z-index: 1;
      font: ${mainFont};
      left: 10%;
      top: 15rem;
      h1 {
        font-size: 2.7rem;
        line-height: 2.8rem;
      }
    }
  }
  .about {
    position: relative;
    top: 110vh;
    .left {
      padding: 0 10rem 0 10rem;
      width: 50%;
      h1 {
        margin: 0;
      }
      p {
        line-height: 2rem;
      }
    }
    .right {
      width: 50%;
    }
  }
`;
