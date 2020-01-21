import React from "react";

import { Container } from "./styles";
import ArrowSvg from '../../assets/images/icons/arrow.svg'
export default function AboutUs() {
  const PlayStoreUrl = `https://play.google.com/store/search?q`
  return (
    <Container>
      <h1>
        Acesse notícias publicadas
        <br />
        pela Defesa Civil
      </h1>
      <div id="Test">
        <img src={ArrowSvg}/>
      </div>
      <a href={PlayStoreUrl} target="_blank"><button>BAIXAR APP</button></a>
      
    </Container>
  );
}
