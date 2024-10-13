import styled from "styled-components";

function Products() {

  const product = [
    {
      id: 1,
      name: "멍피자 1p, 강아지피자",
      price: 5500,
      imgUrl: "사진🌃"
    },
    {
      id: 2,
      name: "멍쿠키 1p, 멍쿠키",
      price: 3500,
      imgUrl: "사진🌃"
    },
    {
      id: 3,
      name: "왕왕쿠키 1p, 대왕쿠키",
      price: 6000,
      imgUrl: "사진🌃"
    },
    {
      id: 4,
      name: "멍치즈 1p, 멍치즈",
      price: 5500,
      imgUrl: "사진🌃"
    },
    {
      id: 5,
      name: "왕왕개껌 1p, 왕큰껌",
      price: 5500,
      imgUrl: "사진🌃"
    }
  ]


  const ProductList = styled.div`
    display: grid;  //격자형태로 설정
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  `
  const ProductFrame = styled.div`
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
  `
  const ProductName = styled.p`
    display: flex;
    justify-content: end;
    margin-top: 10px;
    /* font-size: 18px; */
  `;

  const ProdcutPrice = styled.p`
    display: flex;
    justify-content: flex-end;
    font-weight: bold;
    color: #007bff;
  `;

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

  return (
    <>
      <h1>전체상품</h1>
      <br />  {/* /hr왜 안먹어?  */}
      <ProductList>
        {product.map((product) => {
          return (
            <ProductFrame key={product.id}>
              {product.imgUrl}
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