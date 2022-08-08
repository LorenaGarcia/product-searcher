import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import { Layout } from "../Layout";
import { ProductCard } from "./components/ProductCard";
import { Loading } from "../Loading";

import * as Styled from "./SearchResults.styles";

function SearchResults() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { search } = router.query;

  const getResults = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
      );
      const { results } = data;
      setProducts(results.slice(0, 4));
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getResults();
  }, [search]);

  return (
    <Layout breads={[{ label: search }]}>
      <Styled.Container>
        {isLoading ? (
          <Loading />
        ) : (
          products.map(({ id, shipping, thumbnail, title, price, seller }) => {
            const { free_shipping } = shipping;
            const { eshop } = seller;

            return (
              <ProductCard
                key={id}
                id={id}
                freeShipping={free_shipping}
                imageUrl={thumbnail}
                name={title}
                price={price}
                seller={eshop?.nick_name}
                isLoading={isLoading}
              />
            );
          })
        )}
      </Styled.Container>
    </Layout>
  );
}

export { SearchResults };
