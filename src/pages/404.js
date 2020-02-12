import React from "react";
import styled from "styled-components/macro";
import { breakpoints } from "../components/Media";
import { Link } from "gatsby";

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  max-width: 2000px;
  margin: 0 auto;
  overflow: hidden;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 100vw;
    height: 100vh;
  }
`;



const NotFoundPage = () => (
  <Layout>
    <h1 style={{fontWeight: 'bolder', fontSize: '30px'}}>Not Found</h1>
    <p style={{fontSize: '18px'}}>The page does not exist</p>
    <p style={{fontSize: '15px'}}>Go back
      {' '}
      <Link title='home' to='/'>
          Home
      </Link>
    </p>
  </Layout>
);

export default NotFoundPage;
