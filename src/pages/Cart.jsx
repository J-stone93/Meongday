import styled from "styled-components";
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";


function Cart() {

  const MiddleLine = styled.div`
    display: flex;
    justify-content: center;
    width: 1400px;
    margin: 20px 0px;
    border-top: 2px solid black;
  `
  const StyledTable = styled(Table)`
    text-align: center; //테이블 안의 모든 내용 가운데 정렬
  `;

  const StyledPlMiButton = styled(Button)`
  margin: 3px;
  width: 25px;
  height: 25px; 
  padding: 0;   
  font-size: 14px; 
  `

const cartItem = [
  {
    id: 1,
    name: "멍피자 1p, 강아지피자",
    price: 5500,
    imgUrl: <img src="/images/meongday.png" width='30px' />
  },
  {
    id: 2,
    name: "멍피자2 1p, 강아지피자2",
    price: 6000,
    imgUrl: <img src="/images/meongday.png" width='30px' />
  }
]


  return (
    <>
      <h2>장바구니</h2>
      <MiddleLine />
      <StyledTable striped bordered hover >
        <thead>
          <tr>
            <th>품명</th>
            <th>수량</th>
            <th>변경</th>
            <th>가격</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItem.map((item) => {
            return(
            <tr key={item.id}>
              <td>{item.imgUrl} {item.name}</td>
              <td>123</td>
              <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
                <StyledPlMiButton variant="outline-success">-</StyledPlMiButton>
                <StyledPlMiButton variant="outline-success">+</StyledPlMiButton>
              </td>
              <td>{item.price}  </td> {/* 장바구니제거 */}
              <td><StyledPlMiButton variant="outline-success"> x </StyledPlMiButton></td>
            </tr>
            )
          })}
          <tr>
            <td colSpan={2}></td>
            <td></td>
            <td>총액</td>
            <td>30,000원</td>
          </tr>
        </tbody>
      </StyledTable>

      <Button variant="success" type="submit">결제하기</Button>{' '}
    </>
  );
};

export default Cart;
