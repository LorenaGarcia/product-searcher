import React, { useState } from "react";
import Image from "next/image";

import { redirectToSearch } from "./Search.utils";
import * as Styled from "./Search.styles";

function Search() {
  const [text, setText] = useState("");

  const onChangeSearch = ({ target }) => {
    setText(target.value);
  };

  const onClickSearch = () => {
    redirectToSearch(text);
  };

  const onAutocompleteEnter = ({ key }) => {
    if (key === "Enter") {
      onClickSearch();
    }
  };

  return (
    <Styled.Container>
      <Styled.Input
        placeholder="Nunca dejes de buscar"
        value={text}
        onChange={onChangeSearch}
        onKeyPress={onAutocompleteEnter}
      />
      <Styled.IconContainer onClick={onClickSearch}>
        <Image
          src="/icon_search.png"
          alt="Mercado libre"
          width={15}
          height={15}
        />
      </Styled.IconContainer>
    </Styled.Container>
  );
}

export { Search };
