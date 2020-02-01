import React from "react";
import { useMedia } from "../../hooks/useMedia";
import { Container } from "./styles";
import ArrowSvg from "../../assets/images/icons/arrow.svg";
import Smartphone from "../../assets/images/smartphone.png";
import Mobile from "./Mobile/Mobile";
import { Slide } from "react-slideshow-image";
import Images from "../../assets/images";
export default function AboutUs() {
  const { isMedium, isSmall, isLarge } = useMedia();
  const properties = {
    duration: 8000,
    transitionDuration: 700,
    // infinite: true
    // indicators: true,
    arrow: false
    // onChange: (oldIndex, newIndex) => {
    //   console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    // }
  };

  const PlayStoreUrl = `https://play.google.com/store/search?q`;
  return isLarge ? (
    <Container desktop={isSmall + isMedium} mobile={isSmall + isMedium}>
      <div class="content" desktop={isSmall + isMedium}>
        <Slide {...properties} class="slide">
          <div className="each-slide slideImgs">
            <div>
              <img class="slideImgs" src={Images.SmartPhoneHome} alt="" />
            </div>
          </div>
          <div className="each-slide slideImgs">
            <div>
              <img class="slideImgs" src={Images.Smartphone} alt="" />
            </div>
          </div>
          <div className="each-slide slideImgs">
            <div>
              <img class="slideImgs" src={Images.SmartPhoneFeed} alt="" />
            </div>
          </div>
        </Slide>{" "}
        <div id="containerTexts">
          <h1>
            Construa seu pluviômetro caseiro e envie dados de chuvas quando
            quiser
          </h1>
          <p>
            Basta assistir ao nosso tutorial de como construir seu pluviômetro e
            estará pronto para coletar e enviar dados.
          </p>
          <a href={PlayStoreUrl} target="_blank">
            <button>BAIXAR APP</button>
          </a>
        </div>
      </div>
    </Container>
  ) : (
    <Mobile />
  );
}
