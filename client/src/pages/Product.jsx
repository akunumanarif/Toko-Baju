import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { publicReq } from "../reqMethod";
import { mobile } from "../responsive";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import { toast, ToastContainer } from "react-toastify";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  height: 100vh ${mobile({ padding: "10px", flexDirection: "column" })};
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [products, setProducts] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const [amount, setAmount] = useState(1);
  const [color, setColor] = useState([]);
  const [size, setSize] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await publicReq.get("/products/find/" + id);
        setisLoading(false);
        setProducts(res.data);
      } catch (error) {}
    };
    fetchProduct();
  }, [id]);

  const handleAmount = (type) => {
    if (type === "decrease") {
      amount > 1 && setAmount(amount - 1);
    } else {
      setAmount(amount + 1);
    }
  };

  const notify = () => toast("Please pick a color and size");

  const handleClick = () => {
    if (color.length !== 0 && size.length !== 0) {
      dispatch(addProduct({ ...products, amount, color, size }));
    } else {
      notify();
    }
  };

  return (
    <>
      <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <ImgContainer>
            {isLoading && <Skeleton width="100%" height="90vh" />}
            <Image src={products.img} />
          </ImgContainer>

          <InfoContainer>
            <Title>{products.title || <Skeleton />}</Title>
            <Desc>{products.desc || <Skeleton />}</Desc>
            <Price>Rp. {products.price || <Skeleton />}</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                {products.color?.map((c) => (
                  <FilterColor color={c} key={c} onClick={() => setColor(c)} />
                ))}
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize onChange={(s) => setSize(s.target.value)}>
                  <FilterSizeOption>Select</FilterSizeOption>
                  {products.size?.map((e) => (
                    <FilterSizeOption key={e}>{e}</FilterSizeOption>
                  ))}
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove onClick={() => handleAmount("decrease")} />
                <Amount>{amount}</Amount>
                <Add onClick={() => handleAmount("increase")} />
              </AmountContainer>
              <Button onClick={handleClick}>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
      </Container>
      <ToastContainer />
    </>
  );
};

export default Product;
