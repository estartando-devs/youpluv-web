import React from 'react';
import { useMedia } from '../../hooks/useMedia'
import { Container, MyText, Content, MyImg} from './styles';

import arrow from '../../assets/images/arrow.png';
import smartphone from '../../assets/images/smartphone.png'
import home from '../../assets/images/home.png'
import aboutus from '../../assets/images/aboutus.png'

export default function Header() {
  
  const {isMedium, isSmall} = useMedia()

  return (
    <Container mobile={isSmall + isMedium}>
      <Content mobile={isSmall + isMedium}>
          <div>
            <MyText>YouPluv</MyText>
            <MyText subTitle>Prevenção de enchentes na palma da mão.</MyText>
          </div>
          <ul id='list' style={{listStyleType:'none', position:'absolute', right:10, bottom:0}}>
              <li><img src={home}/></li>
              <li><img src={smartphone}/></li>
              <li><img src={aboutus}/></li>
          </ul>
      </Content>
          <MyImg mobile={isSmall + isMedium} src={arrow}/>
    </Container>
  );
}
