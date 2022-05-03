import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #942728;
  a {
    color: white;
    text-decoration: none;
    opacity: 1;
  }
  .instagram-logo {
    height: 4rem;
  }
  ul {
    display: flex;
    flex-direction: row;
    li {
      margin: 1rem;
      list-style-type: none;
    }
  }
  .header-link {
    font: normal normal 600 16px/25px Poppins;
    letter-spacing: 0px;
  }
  .left {
    display: flex;
    justify-content: flex-start;
    ul {
      padding-left: 0;
    }
  }
  .center {
    display: flex:
    align-items: center;
    justify-content: center;
    .instagram-link {
      position:relative;
      top: -1.2rem;
      left: 3rem;
    }
  }
  .right {
    display: flex:
    align-items: center;
    justify-content: center;
    li {
      width: 2rem;
    }
    .instagram-link-1 {
      position:relative;
      top: -1.2rem;
      }
    .instagram-link-2 {
      position:relative;
      top: -1.2rem;
      }
    }
`;
