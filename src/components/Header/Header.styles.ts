import styled from "styled-components";
import { headerHeight, mainFont } from "../../globals";
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #942728;
  height: ${headerHeight};
  min-width: min-content;
  .c4l-logo{
    color: #ffffff;
    height: 2.5rem;
  }
  a {
    color: #ffffff;
    text-decoration: none;
    opacity: 1;
  }
  .instagram-logo-thin {
    height: 2rem;
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
    font: ${mainFont};
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
      top: -0.5rem;
    }
  }
  .right {
    display: flex:
    align-items: center;
    justify-content: center;
    margin-right:3rem;
    li {
      width:auto;
    }
    .instagram-link {
      position:relative;
      top:-0.2rem;
      color:#ffffff;
      }
    .whats-app-logo {
      position:relative;
      top:-0.1rem;
      color: #ffffff;
      height:1.8rem;
      width:1.8rem;
      }
    }
`;
