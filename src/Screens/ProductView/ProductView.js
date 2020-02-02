import React, { useState } from "react";
import { useMedia } from "../../hooks/useMedia";
import { Container } from "./styles";
import ArrowSvg from "../../assets/images/icons/arrow.svg";
import Smartphone from "../../assets/images/smartphone.png";
import Mobile from "./Mobile/Mobile";
import { Slide } from "react-slideshow-image";
import Images from "../../assets/images";

export default function AboutUs() {
  
  const textsSlide = {
    0: "O clima em tempo real na palma da sua mão",
    1: "Construa seu pluviômetro caseiro e envie dados de chuvas quandoquiser",
    2: "Acesse notícias publicadas diretamente pela Defesa Civil"
  }

  const { isMedium, isSmall, isLarge } = useMedia();
  const [ currentSlideText, setCurrentSlideText ] = useState(textsSlide["0"]);
  const properties = {
    duration: 8000,
    transitionDuration: 700,
    // infinite: true
    // indicators: true,
    arrow: false,
    onChange: (newIndex) => {
      // console.log(`slide transition to ${newIndex}`);
      setCurrentSlideText(textsSlide[`${newIndex}`]);
    }
  };

  const PlayStoreUrl = `https://play.google.com/store/search?q`;

  return isLarge ? (
    <Container desktop={isSmall + isMedium} mobile={isSmall + isMedium}>
      <div className="content" desktop={isSmall + isMedium}>
        <Slide {...properties} className="slide">
          <div className="each-slide slideImgs">
            <div>
              {/* <h1>O clima em tempo real na palma da sua mão</h1> */}
              <img className="slideImgs" src={Images.SmartPhoneHome} alt="" />
            </div>
          </div>
          <div className="each-slide slideImgs">
            <div>
              {/* <h1>O clima em tempo real na palma da sua mão</h1> */}
              <img className="slideImgs" src={Images.Smartphone} alt="" />
            </div>
          </div>
          <div className="each-slide slideImgs">
            <div>
              {/* <h1>O clima em tempo real na palma da sua mão</h1> */}
              <img className="slideImgs" src={Images.SmartPhoneFeed} alt="" />
            </div>
          </div>
        </Slide>
        <div id="containerTexts">
          <h1>
            {/* {texts.map(text => (
              <h1 key={text.id}>{text.Title}</h1>
            ))} */}
            {currentSlideText}
          </h1>
          <p>
            Basta assistir ao nosso tutorial de como construir seu pluviômetro e
            estará pronto para coletar e enviar dados.
          </p>
          <a href={PlayStoreUrl} target="_blank">
            <button>BAIXAR &nbsp; APP</button>
          </a>
        </div>
      </div>
    </Container>
  ) : (
    <Mobile />
  );
}
