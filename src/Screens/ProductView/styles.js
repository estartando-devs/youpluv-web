import styled, { css } from "styled-components";
import Imagens from "../../assets/images";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    display: flex;
    .slide {
      top: -31px;
      width: 34em;
      left: -6.5vw;
      height: 34em;
      margin: 15px auto;
      position: relative;

      .react-slideshow-container .nav:last-of-type {
        background-image: url(${Imagens.Icons.ArrowSvg});
        background-repeat: no-repeat;
        color: #ffffff;
        position: relative;
        left: 45vw;
      }
      .react-slideshow-container .nav {
        height: 30px;
        background: none;
        width: 30px;
        z-index: 10;
        text-align: center;
        cursor: pointer;
        color: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .react-slideshow-container .nav span {
        display: none;
      }
      .react-slideshow-container {
        display: flex;
        align-items: center;
      }
      .slideImgs {
        width: 310px;
        margin: auto auto;
      }
    }
    .phone {
      width: 324px;
      height: 494px;
    }
    #containerTexts {
      margin-left: -180px;
      h1 {
        width: 20em;
        color: #2b9cc2;
        font-size: 28px;
        font-weight: bold;
        line-height: 44px;
        font-style: normal;
        font-family: "Montserrat";
      }
      p {
        width: 30em;
        color: #00151c;
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
        font-style: normal;
        font-family: "Montserrat";
      }

      button {
        width: 367px;
        height: 40px;
        border: none;
        outline: none;
        color: #ffffff;
        font-size: 14px;
        margin-top: 7em;
        font-weight: bold;
        line-height: 17px;
        font-style: normal;
        text-align: center;
        background: #2b9cc2;
        border-radius: 20px;
        font-family: "Montserrat";
        transition: 0.8s;
        &:hover {
          opacity: 0.6;
          transition: 0.8s;
        }
      }
    }
    img {
      width: 40px;
    }
  }
`;
export { Container };
// import styled, { css } from "styled-components";
// import Imagens from "../../assets/images";

// const Container = styled.div`
//   width: 100%;
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   .content {
//     display: flex;
//     .slide {
//       top: -31px;
//       width: 34em;
//       left: -90px;
//       height: 40em;
//       margin: 15px auto;
//       position: relative;

//       .react-slideshow-container .nav:last-of-type {
//         background-image: url(${Imagens.Icons.ArrowSvg});
//         background-repeat: no-repeat;
//         color: #ffffff;
//         position: relative;
//         left: 31em;
//       }
//       .react-slideshow-container .nav {
//         height: 30px;
//         background: none;
//         width: 30px;
//         text-align: center;
//         cursor: pointer;
//         border-radius: 50%;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//       }
//       .react-slideshow-container .nav span {
//         display: none;
//       }
//       .react-slideshow-container {
//         display: flex;
//         align-items: center;
//       }
//       .slideImgs {
//         width: 310px;
//         margin: auto auto;
//         h1 {
//           width: 20em;
//           color: #2b9cc2;
//           font-size: 28px;
//           font-weight: bold;
//           line-height: 44px;
//           font-style: normal;
//           font-family: "Montserrat";
//         }
//       }
//     }
//     .phone {
//       width: 324px;
//       height: 494px;
//     }
//     #containerTexts {
//       margin-left: -180px;
//       p {
//         width: 30em;
//         color: #00151c;
//         font-size: 18px;
//         font-weight: 500;
//         margin-top: 150px;
//         line-height: 22px;
//         font-style: normal;
//         font-family: "Montserrat";
//       }

//       button {
//         width: 367px;
//         height: 40px;
//         border: none;
//         outline: none;
//         color: #ffffff;
//         font-size: 14px;
//         margin-top: 7em;
//         font-weight: bold;
//         line-height: 17px;
//         font-style: normal;
//         text-align: center;
//         background: #2b9cc2;
//         border-radius: 20px;
//         font-family: "Montserrat";
//         transition: 0.8s;
//         &:hover {
//           opacity: 0.6;
//           transition: 0.8s;
//         }
//       }
//     }
//     img {
//       width: 40px;
//     }
//   }
// `;
// export { Container };
