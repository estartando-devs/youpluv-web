import React from "react";
import Lottie from "react-lottie";
import { Container } from "./styles";
import animationData from "../../../assets/Animation/cloudStirring.json";

export default function CloudStirring(props) {
  const defaultOptions = {
    // loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <Container desktop={props.desktop}>
      <Lottie
        width={"100%"}
        height={"100vh"}
        zoom={1}
        autoSize
        autoPlay
        loop
        speed={0.7}
        hardwareAccelerationAndroid={true}
        options={defaultOptions}
      />
    </Container>
  );
}

// import React from "react";
// import Lottie from "react-lottie";
// import animationData from "../../../assets/Animation/cloudStirring.json";

// export default class LottieControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isStopped: false, isPaused: false };
//   }

//   render() {
//     const buttonStyle = {
//       display: "block",
//       margin: "10px auto"
//     };

//     const defaultOptions = {
//       loop: true,
//       autoplay: true,
//       animationData: animationData,
//       rendererSettings: {
//         preserveAspectRatio: "xMidYMid slice"
//       }
//     };

//     return (
//       <div>
//         <Lottie
//           options={defaultOptions}
//           height={400}
//           width={400}
//           isStopped={this.state.isStopped}
//           isPaused={this.state.isPaused}
//         />
//         <button
//           style={buttonStyle}
//           onClick={() => this.setState({ isStopped: true })}
//         >
//           stop
//         </button>
//         <button
//           style={buttonStyle}
//           onClick={() => this.setState({ isStopped: false })}
//         >
//           play
//         </button>
//         <button
//           style={buttonStyle}
//           onClick={() => this.setState({ isPaused: !this.state.isPaused })}
//         >
//           pause
//         </button>
//       </div>
//     );
//   }
// }
