import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/footer";
import "../index.css";

function Forecast(props) {
  return (
    <>
      <Layout></Layout>
      <Footer projectDisplay="block" />
    </>
  );
}

export default Forecast;
