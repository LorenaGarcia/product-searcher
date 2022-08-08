import styled from "styled-components";

const Breadcrumbs = styled.ul`
  color: #999999;
  font-size: 14px;
  list-style: none;
  padding: 0;

  & > li:after {
    content: "${(props) => props.separator || "/"}";
    padding: 0 8px;
  }
`;

const Crumb = styled.li`
  display: inline-block;

  &:first-letter {
    text-transform: uppercase;
  }

  &:last-of-type:after {
    content: "";
    padding: 0;
  }
`;

export { Breadcrumbs, Crumb };
