import styled from "styled-components";

const Container = styled.div`
  background:#0E223A;
  width:100%
  height:100%
  display:${props=> props.desktop ? "none" : null}
`;

export { Container };
