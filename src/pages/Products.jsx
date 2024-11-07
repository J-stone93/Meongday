import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { selectCategoryState, selectedAllProduct } from "../features/productSlice";
import axios from "axios";
import { useEffect, useState } from "react";


const MiddleLine = styled.div`
  display: flex;
  justify-content: center;
  width: 1400px;
  margin: 20px 0px;
  border-top: 2px solid black;
  `

const ProductList = styled.div`
  display: grid;  //격자형태로 설정
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
`
const ProductFrame = styled.div`
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px;
`
const ProductName = styled.p`
  display: flex;
  justify-content: end;
  margin-top: 10px;
  font-size: 18px;
`;

const ProdcutPrice = styled.p`
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
  color: #007bff;
`;

const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;  // 필요에 따라 조정
  height: 180px;
`

const PageNationContainer = styled.div`
  margin-top: 20px;
`

const PageNation = styled.button`
  margin: 5px 5px;
  padding: 8px 13px;
  border-radius: 5px;
  border: none;
  font-size: 18px;

  &:hover {
  background-color: #9e9ea0;
  font-weight: bold;
}
`

function Products() {

  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  // const product = useSelector(selectedAllProduct);
  const productCategory = useSelector(selectCategoryState);

  
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        console.log(productCategory);
        const response = await axios.get(`http://localhost:8080/product/category?category=${productCategory}`);
        console.log(response.data);
        
        if (response.status === 200) {
          setProductList(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchProductList();
  }, []);

  return (
    <>
      <h2>전체상품</h2>
      <MiddleLine />
      <ProductList >
        {productList && productList.map((product) => {
          return (
            <ProductFrame key={product.id} onClick={() => { navigate(`/productDetail/${product.id}`) }} style={{ cursor: 'pointer' }}>
              {/* <ProductImage><img src={product.imgPaths[0]} alt={product.name} /></ProductImage> */}
              <ProductName>{product.name}</ProductName>
              <ProdcutPrice>{product.price.toLocaleString()}원</ProdcutPrice>
            </ProductFrame>
          )
        })}
      </ProductList>

      <PageNationContainer>
        <PageNation>1</PageNation>
        <PageNation>2</PageNation>
        {/* 데이터양에따라 페이지네이션버튼 생기고 안생기고 요망 */}
      </PageNationContainer>

    </>
  );
};

export default Products;