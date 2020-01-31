import styled from "styled-components";

const Container = styled.div`
  @media(min-width: 1024px) {
    display: none;
  }

  position: fixed;
  top: 100vh;
`;

export { Container };
