import styled from "styled-components";
import Table from 'react-bootstrap/Table';


function Cart() {

  const MiddleLine = styled.div`
  display: flex;
  justify-content: center;
  width: 1400px;
  margin: 20px 0px;
  border-top: 2px solid black;
  `

  return (
    <>
    <h2>장바구니</h2>
    <MiddleLine />
    {/* 1. 품명 수량 가격 
    2. 품명 수량 가격
    ...         총가격 */}

<Table striped bordered hover>
      <thead>
        <tr>
          <th>품명</th>
          <th>수량</th>
          <th>총액</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td colSpan={2}></td>
          <td>전체총액 30,000</td>
        </tr>
      </tbody>
    </Table>
    </>
  );
};

export default Cart;
