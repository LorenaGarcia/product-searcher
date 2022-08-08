import React from "react";
import Image from "next/image";

import * as Styled from "./Home.styles";

function Home() {
  return (
    <Styled.Container>
      <Styled.Title>Busca un producto</Styled.Title>
      <Image src="/cart.png" alt="Home" width={80} height={80} />
    </Styled.Container>
  );
}

export { Home };
