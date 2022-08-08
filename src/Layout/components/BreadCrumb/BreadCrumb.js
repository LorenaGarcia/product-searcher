import React, { useEffect, useState } from "react";
import axios from "axios";

import * as Styled from "./BreadCrumb.styles";

function BreadCrumb({ breads, categoryId }) {
  const [category, setCategory] = useState();

  const getCategory = async () => {
    try {
      const { data } = await axios.get(
        `https://api.mercadolibre.com/categories/${categoryId}`
      );
      const { name } = data;
      setCategory(name);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (categoryId) {
      getCategory();
    }
  }, [categoryId]);

  if (!breads?.length) {
    return <></>;
  }

  return (
    <Styled.Breadcrumbs>
      {category && <Styled.Crumb>{category}</Styled.Crumb>}
      {breads.map(({ label }, key) => (
        <Styled.Crumb key={key}>{label}</Styled.Crumb>
      ))}
    </Styled.Breadcrumbs>
  );
}

export { BreadCrumb };
