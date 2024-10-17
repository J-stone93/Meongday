import { useState } from 'react';
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap';
import styled from 'styled-components';


function ProductDetail() {

  const MiddleLine = styled.div`
  display: flex;
  justify-content: center;
  width: 1400px;
  margin: 20px 0px;
  border-top: 2px solid black;
  `
  const StyledContainer = styled(Container)`
  text-align: center;
  `

  const StyledRow = styled(Row)`
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  `;

  const StyleColPrice = styled(Col)`
  /* background-color: #967b7b; */
  margin-top: 40px;
  width: 400px;
  display: flex;

  `

  const PriceContainer = styled(Container)`
  background-color: #c5c59d; /* 배경색 */
  margin-top: 30px;
  width: 55%;
  height: 80px;
  padding: 7px;
  position: relative;
  /* overflow: hidden; */
  `;

  const PlusMinusIcon = styled(Col)`
  position: absolute;
  right: -5px;
  `

  const TotalPrice = styled(Col)`
    position: absolute;
    right: 20px;
    bottom: 5px;
  `


  const CountButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #f5f5f5;
  border: 1px solid black;
  &:hover {
  background-color: #c9c9c9;
  } 
  `;
  const CountInput = styled.input`
  width: 30px;
  height: 30px;
  background-color: #f5f5f5;
  text-align: center;
  `

  const product = {
    productName: '멍쿠키',
    productCategory: '식품류',
    productPrice: 5500
  }
  
  // 썸네일상세사진등등 더더필요

  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCounterPlus = () => {
    setCount(count + 1);
    setTotalPrice((count+ 1 ) * product.productPrice);
  };

  const handleCounterMinus = () => {
    if (count > 0) {
      setCount(count - 1);
      setTotalPrice((count - 1) * product.productPrice);
    }
  };

  return (
    <>
      <h2>{product.productName}</h2>
      <MiddleLine />
      <StyledContainer>
        <StyledRow >
          <Col md={6}>
            <img src="/images/ggangSample.png" width="70%" />
          </Col>
          <Col md={6}  >
            <h4>{product.productName}</h4>
            <p className="pt-4"> {product.productCategory}</p>
            <p>상품가격: {product.productPrice.toLocaleString()}원</p>

            <PriceContainer>
              <Row className="mt-1">
                <Col sm={6}>{product.productName}</Col>
                <PlusMinusIcon sm={6}>
                  <CountButton type="number" onClick={handleCounterMinus}> - </CountButton>
                  <CountInput type="text" value={count} />
                  <CountButton type="number" onClick={handleCounterPlus}> + </CountButton>
                </PlusMinusIcon>
              </Row>
              <TotalPrice>총 상품금액: {totalPrice.toLocaleString()}원</TotalPrice>
            </PriceContainer>
            <Col className='mt-2'>
              <Button variant="success">구매하기</Button>{' '}
              <Button variant="outline-success">장바구니 담기</Button>
            </Col>
          </Col >

          {/* 리뷰 */}
          {/* 상세사진넣기 */}
        </StyledRow>
      </StyledContainer>
    </>
  )
}

export default ProductDetail;