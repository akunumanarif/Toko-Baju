import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";
import { useEffect, useState } from "react";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, sort, filters }) => {
  const [products, setProducts] = useState([]);
  const [filteredProd, setFilteredProd] = useState([]);

  useEffect(() => {
    try {
      const fetchProduct = async () => {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/product/all?category=${cat}`
            : `http://localhost:5000/api/product/all`
        );
        setProducts(res.data);
      };
      fetchProduct();
    } catch (error) {
      console.log(error);
    }
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProd(
        products.filter((item) => {
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          );
        })
      );
  }, [products, cat, filters]);
  return (
    <Container>
      {filteredProd.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
