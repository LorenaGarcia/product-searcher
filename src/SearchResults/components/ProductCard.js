import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import { formatMoneyField } from "../../utils/currency";
import * as Styled from "./ProductCard.styles";

function ProductCard({ id, freeShipping, imageUrl, name, price, seller }) {
  return (
    <Styled.Container href={`/items/${id}`}>
      <Styled.Image src={imageUrl} alt={name} />
      <Styled.Description>
        <Styled.PriceContainer>
          <Styled.Price>{formatMoneyField(price)}</Styled.Price>
          {freeShipping && (
            <Image
              src="/shipping.png"
              alt="Envio gratis"
              width={20}
              height={20}
            />
          )}
        </Styled.PriceContainer>
        <Styled.Name>{name}</Styled.Name>
      </Styled.Description>
      <Styled.Seller>{seller}</Styled.Seller>
    </Styled.Container>
  );
}

ProductCard.propTypes = {
  id: PropTypes.string,
  free_shipping: PropTypes.bool,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

export { ProductCard };
