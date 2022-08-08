import styled from "styled-components";

const Container = styled.div`
  grid-area: header;
  background-color: #ffe600;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 1200px;
  padding: 10px 0px;
  width: calc(100% - 20px);

  @media (min-width: 600px) {
    width: calc(100% - 300px);
  }
`;

export { Container, SearchContainer };
