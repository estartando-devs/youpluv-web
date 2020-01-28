import React from "react";
import { Container } from "./styles";

import Footer from "../Footer/Footer";
import CallStore from "../CallStore/CallStore";
import ProductView from "../ProductView/ProductView";
import Header from "../Header/Header";
import AboutUs from "../AboutUs/AboutUs";

export default function Main() {
  return (
    <Container>
      <Header />
      <AboutUs />
      <ProductView />
      <CallStore />
      <Footer />
    </Container>
  );
}
