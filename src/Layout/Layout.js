import React from "react";

import { Header } from "../Header";
import { BreadCrumb } from "./components/BreadCrumb";

import * as Styled from "./Layout.styles";

function Layout({ children, breads, categoryId }) {
  return (
    <Styled.Container>
      <Header />
      <Styled.Main>
        <BreadCrumb breads={breads} categoryId={categoryId} />
        {children}
      </Styled.Main>
    </Styled.Container>
  );
}

export { Layout };
