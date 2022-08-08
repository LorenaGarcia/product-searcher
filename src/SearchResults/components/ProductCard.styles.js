import styled from "styled-components";

const Container = styled.a`
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  text-decoration: none;

  & + & {
    border-top: 1px solid #eeeeee;
  }
`;

const Image = styled.img`
  border-radius: 8px;
  height: 180px;
  margin-right: 16px;
  width: 180px;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Price = styled.p`
  color: #333333;
  font-size: 12px;
  margin-right: 10px;

  @media (min-width: 600px) {
    font-size: 18px;
  }
`;

const Name = styled.p`
  color: #666666;
  font-size: 12px;

  @media (min-width: 600px) {
    font-size: 18px;
  }
`;

const Description = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  width: 25%;
  padding: 0px 18px;
`;

const Seller = styled.p`
  box-sizing: border-box;
  flex-grow: 1;
  font-size: 10px;
  padding: 0px;
  text-align: right;
  width: 25%;
  color: #999999;

  @media (min-width: 600px) {
    padding: 0px 50px;
    font-size: 12px;
  }
`;

export { Container, Image, PriceContainer, Price, Name, Description, Seller };
