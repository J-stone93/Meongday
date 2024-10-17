import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Products() {

  const product = [
    {
      id: 1,
      name: "멍피자 1p, 강아지피자",
      price: 5500,
      imgUrl: <img src="/images/meongday.png" width="50%" />
    },
    {
      id: 2,
      name: "멍쿠키 1p, 멍쿠키",
      price: 3500,
      imgUrl: <img src="/images/ggangSample.png" alt="멍태강1" width="50%" />
    },
    {
      id: 3,
      name: "왕왕쿠키 1p, 대왕쿠키",
      price: 6000,
      imgUrl: <img src="/images/ggangSample.png" alt="멍태강2" width="50%" />
    },
    {
      id: 4,
      name: "멍치즈 1p, 멍치즈",
      price: 5500,
      imgUrl: <img src="/images/ggangSample.png" alt="멍태강3" width="50%" />
    },
    {
      id: 5,
      name: "왕왕개껌 1p, 왕큰껌",
      price: 5500,
      imgUrl: <img src="/images/meongday.png" width="50%" />
    }
  ];

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
    width: 100%; /* 너비 설정 (필요에 따라 조정) */
    height: 180px /* 고정 높이 설정 (필요에 따라 조정) */
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

  const navigate = useNavigate();

  return (
    <>
      <h2>전체상품</h2>
      <MiddleLine />
      <ProductList >
        {product.map((product) => {
          return (
            <ProductFrame key={product.id} onClick={()=>{navigate('/productDetail')}} style={{ cursor: 'pointer'}}>
              <ProductImage>{product.imgUrl}</ProductImage>
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