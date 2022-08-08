import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-left: 30px;
`;

const Input = styled.input`
  border: none;
  color: #333333;
  font-size: 18px;
  padding: 8px;
  width: 100%;

  ::placeholder {
    color: #999999;
  }

  &:focus {
    outline: none;
  }
`;

const IconContainer = styled.div`
  background: #eeeeee;
  display: flex;
  align-content: center;
  align-items: center;
  height: 100%;
  width: 40px;
  justify-content: center;
  cursor: pointer;
`;

export { Container, Input, IconContainer };
