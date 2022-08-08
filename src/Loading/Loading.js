import React from "react";

import * as Styled from "./Loading.styles";

function Loading() {
  return (
    <Styled.Container>
      <Styled.Image src="/box1.png" />
      <Styled.Image src="/box2.png" />
      <Styled.Image src="/box3.png" />
      <Styled.Image src="/box1.png" />
      <Styled.Image src="/box2.png" />
    </Styled.Container>
  );
}

export { Loading };
