import React from "react";
import { useMedia } from "../../hooks/useMedia";
import { Container, MyText, Content, MyImg } from "./styles";
import Images from "../../assets/images";

export default function Header() {
  const { isMedium, isSmall } = useMedia();

  return (
    <Container id="header" mobile={isSmall + isMedium}>
      <Content mobile={isSmall + isMedium}>
        <div class="containerText">
          <h1 id="Title">YouPluv</h1>
          <img id="logo" src={Images.YouPluv} alt="" />
          <MyText subTitle>Prevenção de enchentes na palma da mão.</MyText>
        </div>
        <ul id="list">
          <li className="list_item">
            <a href="#header">
              <img src={Images.Icons.Home} alt="" />
            </a>
          </li>
          <li className="list_item">
            <a href="#callStore">
              <img src={Images.Icons.Smartphone} alt="" />
            </a>
          </li>
          <li className="list_item">
            <a href="#aboutUs">
              <img src={Images.Icons.AboutUs} alt="" />
            </a>
          </li>
        </ul>
      </Content>

      <a id="arrow" href="#aboutUs">
        <MyImg mobile={isSmall + isMedium} src={Images.Icons.Arrow} />
      </a>
    </Container>
  );
}
