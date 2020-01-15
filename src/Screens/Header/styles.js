import styled, { css } from 'styled-components'
import backgroundDesktop from '../../assets/images/backgroundDesktop.png'
import background from '../../assets/images/backgroundHeader.png'

const Container = styled.div`
width:100vw;
height:100vh;
background:#49A7DE;
background-image:url(${props => props.mobile ? background : backgroundDesktop});
background-repeat:no-repeat;
background-size:cover;
display:flex;
align-items:flex-start;
justify-content:center;
${props=> props.mobile && css`
display:flex;
align-items:center;
height:110vh;
justify-content:center;
`}
`
const Content = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
height:20%;
width:90%
margin-top:200px;
${props=> props.mobile && css`
width:80%;
#list{
    display:none
}
`}
`

const MyText = styled.h1`
color:white;
font-weight:bold;
font-size:36px;
${props=> props.subTitle && css`
    font-size:18px;
`}
`

const MyImg = styled.img`
position: absolute;
bottom:30px;
${props => props.mobile && css`
bottom:-30px
`}
`

export { Container, MyText, Content, MyImg }