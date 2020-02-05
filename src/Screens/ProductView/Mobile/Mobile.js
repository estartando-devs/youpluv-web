import React from "react";
import { useMedia } from "../../../hooks/useMedia";
import { Container } from "./styles";
import ArrowSvg from "../../../assets/images/icons/arrow.svg";
import { Slide } from "react-slideshow-image";
import Images from "../../../assets/images";

export default function AboutUs() {
  const { isMedium, isSmall } = useMedia();
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

  const PlayStoreUrl = `https://www.google.com/url?sa=t&source=web&rct=j&url=https://play.google.com/&ved=2ahUKEwiN0LeXlbnnAhViIbkGHUmlCHEQjjgwAHoECAcQAw&usg=AOvVaw17R4zYMafohnWwu5zSuX94`;
  return (
    <Container desktop={isSmall + isMedium} mobile={isSmall + isMedium}>
      {/* <div id="subContainer">
      </div> */}
      <Slide {...properties} class="slide">
        <div className="each-slide slideImgs">
          <div>
            <h1>O clima em tempo real na palma da sua mão</h1>
            <img class="slideImgs" src={Images.SmartPhoneHome} alt="" />
          </div>
        </div>
        <div className="each-slide slideImgs">
          <div>
            <h1>
              Construa seu pluviômetro caseiro e envie dados de chuvas quando
              quiser
            </h1>
            <img class="slideImgs" src={Images.Smartphone} alt="" />
          </div>
        </div>
        <div className="each-slide slideImgs">
          <div>
            <h1>Acesse notícias publicadas diretamente pela Defesa Civil</h1>
            <img class="slideImgs" src={Images.SmartPhoneFeed} alt="" />
          </div>
        </div>
      </Slide>
      <a href={PlayStoreUrl} target="_blank">
        <button>BAIXAR APP</button>
      </a>
    </Container>
  );
}
