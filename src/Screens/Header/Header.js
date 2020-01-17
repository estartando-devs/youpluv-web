import React from "react";
import { useMedia } from "../../hooks/useMedia";
import { Container, MyText, Content, MyImg } from "./styles";

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
          <li className="list_item">
            <img src={Images.Icons.Home} alt="" />
          </li>
          <li className="list_item">
            <img src={Images.Icons.Smartphone} alt="" />
          </li>
          <li className="list_item">
            <img src={Images.Icons.AboutUs} alt="" />
          </li>
        </ul>
      </Content>
      <MyImg mobile={isSmall + isMedium} src={Images.Icons.Arrow} />
    </Container>
  );
}
