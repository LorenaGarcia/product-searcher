import styled from "styled-components";

const Container = styled.div`
  background-color: #ffffff;
  margin: 16px 0px 100px 0px;
`;

const Image = styled.img`
  height: auto;
  max-width: 200px;

  @media (min-width: 800px) {
    max-width: 680px;
  }
`;

const DescriptionContainer = styled.div`
  font-size: 20px;
  padding: 20px;
  width: auto;

  @media (min-width: 800px) {
    font-size: 28px;
    max-width: 680px;
    padding: 42px;
  }
`;

const Description = styled.div`
  font-size: 10px;
  margin-top: 32px;

  @media (min-width: 800px) {
    font-size: 16px;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px 20px 0px 20px;

  @media (min-width: 800px) {
    flex-direction: row;
    padding: 42px 42px 0px 42px;
  }
`;

const Details = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  margin: 0px;
  width: 100%;

  @media (min-width: 800px) {
    margin: 0px auto;
    max-width: 200px;
  }
`;

const Button = styled.button`
  background-color: #3483fa;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  font-size: 14px;
  padding: 10px;
  width: 100%;
`;

const Quantity = styled.p`
  color: #666666;
  font-size: 14px;
`;

const Title = styled.p`
  color: #333333;
  font-size: 24px;
`;

const Price = styled.p`
  color: #333333;
  font-size: 46px;
`;

export {
  Container,
  Image,
  DescriptionContainer,
  Description,
  DetailContainer,
  Details,
  Button,
  Quantity,
  Title,
  Price,
};
