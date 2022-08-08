import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import { Layout } from "../Layout";
import { Loading } from "../Loading";

import { formatMoneyField } from "../utils/currency";
import { getImageUrl } from "./ProductDetail.utils";
import * as Styled from "./ProductDetail.styles";

function ProductDetail() {
  const [product, setProduct] = useState();
  const [description, setDescription] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const getProduct = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://api.mercadolibre.com/items/${id}`
      );
      setProduct(data);
      getDescription();
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const getDescription = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://api.mercadolibre.com/items/${id}/description`
      );
      setDescription(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const onClickBuy = () => {
    alert("Comprar este producto!");
  };

  useEffect(() => {
    if (id) {
      getProduct();
    }
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (!product && !description) {
    return <></>;
  }

  const {
    title,
    thumbnail,
    pictures,
    condition,
    sold_quantity,
    price,
    category_id,
  } = product;

  return (
    <Layout categoryId={category_id} breads={[{ label: title }]}>
      <Styled.Container>
        <Styled.DetailContainer>
          <Styled.Image src={getImageUrl(pictures)} alt={title} />
          <Styled.Details>
            <Styled.Quantity>{`${condition} - ${sold_quantity} vendidos`}</Styled.Quantity>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Price>{formatMoneyField(price)}</Styled.Price>
            <Styled.Button onClick={onClickBuy}>Comprar</Styled.Button>
          </Styled.Details>
        </Styled.DetailContainer>
        <Styled.DescriptionContainer>
          Descripción del producto
          <Styled.Description
            dangerouslySetInnerHTML={{ __html: description?.plain_text }}
          />
        </Styled.DescriptionContainer>
      </Styled.Container>
    </Layout>
  );
}

export { ProductDetail };
