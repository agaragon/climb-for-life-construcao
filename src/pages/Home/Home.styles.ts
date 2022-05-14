import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  .home-main-image {
    position: absolute;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: 0 0;
    z-index: 0;
  }
  .project-description {
    color: #ffffff;
    position: absolute;
    width: 35%;
    z-index: 1;
    font: normal normal 600 16px/25px Poppins;
    left: 10%;
    top: 15rem;
    h1 {
      font-size: 2.7rem;
      line-height: 2.8rem;
    }
  }
`;
