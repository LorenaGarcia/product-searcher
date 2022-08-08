import styled from "styled-components";

const Container = styled.div`
  background-color: #eeeeee;
  /* height: 100vh; */
  display: grid;
  grid-template:
    "header" auto
    "main" 1fr
    / 1fr;
`;

const Main = styled.main`
  grid-area: main;
  margin: auto;
  height: 100%;
  max-width: 1200px;
  width: calc(100% - 20px);

  @media (min-width: 600px) {
    width: calc(100% - 300px);
  }
`;

export { Container, Main };
