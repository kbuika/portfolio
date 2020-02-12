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

const Header = styled.div`
  text-align: center;
  flex: 1;
  justify-content: center;
`;

const Text = styled.div`
  margin-top: 10px;
  font-size: 15px;
`;

const NotFoundPage = () => (
  <Layout>
    <Header>Not Found</Header>
    <Text>The page does not exist</Text>

    <Link title='home' to='/'>
      Home
    </Link>

  </Layout>
);

export default NotFoundPage;
