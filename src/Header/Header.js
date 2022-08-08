import React from "react";
import Image from "next/image";

import { Search } from "../Search";

import * as Styled from "./Header.styles";

function Header() {
  return (
    <Styled.Container>
      <Styled.SearchContainer>
        <Image src="/logo.png" alt="Vercel Logo" width={45} height={30} />
        <Search />
      </Styled.SearchContainer>
    </Styled.Container>
  );
}

export { Header };
