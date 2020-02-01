import styled from "styled-components";

const Container = styled.div`
  background:#0E223A;
  display:${props=> props.desktop ? "none" : null}
`;

export { Container };
