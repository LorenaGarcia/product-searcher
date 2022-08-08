import styled, { keyframes } from "styled-components";

const timeAnimation = keyframes`
90% {
    transform: scale(2.0);
  }
  100% {
    transform: scale(2.1);
  }
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
  min-height: 300px;
  width: 100%;
`;

const Image = styled.img`
  width: 20px;
  height: 20px;
  margin: 10px;
  animation: ${timeAnimation} 0.7s infinite ease-in-out alternate;

  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    animation-delay: 0.4s;
  }
  &:nth-child(5) {
    animation-delay: 0.5s;
  }
`;

export { Container, Image };
