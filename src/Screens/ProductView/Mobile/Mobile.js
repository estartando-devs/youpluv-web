import React from "react";
import { useMedia } from "../../../hooks/useMedia";
import { Container } from "./styles";
import ArrowSvg from "../../../assets/images/icons/arrow.svg";
import { Slide } from "react-slideshow-image";
import Images from "../../../assets/images";

export default function AboutUs() {
  const { isMedium, isSmall } = useMedia();

  const PlayStoreUrl = `https://play.google.com/store/search?q`;
  return (
    <Container desktop={isSmall + isMedium} mobile={isSmall + isMedium}>
      <h1>
        Construa seu pluviômetro caseiro e envie dados de chuvas quando quiser
      </h1>
      {/* <div id="subContainer">
      </div> */}
      <Slide class="slide">
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
      </Slide>
      <a href={PlayStoreUrl} target="_blank">
        <button>BAIXAR APP</button>
      </a>
    </Container>
  );
}
