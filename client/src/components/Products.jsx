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
  console.log(filteredProd);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : `http://localhost:5000/api/products`
        );
        setProducts(res.data);
        // console.log(res.data);
      } catch (error) {
        // console.log(error);
      }
    };
    fetchProduct();
  }, [cat]);

  useEffect(() => {
    try {
      cat &&
        setFilteredProd(
          products.filter((item) =>
            Object.entries(filters).every(([key, value]) =>
              item[key].includes(value)
            )
          )
        );
    } catch (error) {
      console.log(error);
    }
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProd((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProd((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProd((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProd.map((item) => <Product item={item} key={item._id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
