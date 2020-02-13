import styled, { keyframes } from "styled-components/macro";
import { breakpoints } from "../components/Media";

const FadeOut = keyframes`
  0%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`;

const Layout = styled.div`
  min-height: 100vh;
  color: black;
  opacity: 0;
  margin-left: 1em;
  margin-right: 1em;
  animation: ${FadeOut} 0.6s 0.3s ease-in-out forwards;

  a {
    text-decoration: none;
    color: black;
  }

  @media (min-width: ${breakpoints.tabletMin}) {
    max-width: 940px;
    padding: 20px;
    margin-top: 0px;
    margin-bottom: 75px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: ${breakpoints.desktopMin}) {
    max-width: 1200px;
    padding: 20px;
    margin-top: 0px;
    margin-bottom: 75px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export default Layout;
