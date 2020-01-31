import React from "react";
import { useMedia } from "../../hooks/useMedia";
import { Container, MyText, Content, MyImg } from "./styles";
import AboutUs from "../AboutUs/AboutUs";
import Images from "../../assets/images";

export default function Header() {
  const { isMedium, isSmall } = useMedia();

  return (
    <Container mobile={isSmall + isMedium}>
      <Content mobile={isSmall + isMedium}>
        <div>
          <MyText>YouPluv</MyText>
          <MyText subTitle>Prevenção de enchentes na palma da mão.</MyText>
        </div>
        <ul id="list">
          <li href={AboutUs} className="list_item">
            <a href="">
              <img src={Images.Icons.Home} alt="" />
            </a>
          </li>
          <li className="list_item">
            <a href="">
              <img src={Images.Icons.Smartphone} alt="" />
            </a>
          </li>
          <li className="list_item">
            <a href="">
              <img src={Images.Icons.AboutUs} alt="" />
            </a>
          </li>
        </ul>
      </Content>
      <MyImg mobile={isSmall + isMedium} src={Images.Icons.Arrow} />
    </Container>
  );
}
