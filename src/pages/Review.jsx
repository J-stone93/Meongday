import { Pagination, Table } from "react-bootstrap";
import styled from "styled-components";


function Review() {

  const QnAContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px;
`;

const QnAInner = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
`;

const Explanation = styled.p`
  text-align: center;
  font-size: 20px;
`;

const TitleInner = styled.div`
  border-bottom: 1px solid black;
  width: 1180px;
  padding-bottom: 50px;
`;

const TableInner = styled.div`
  margin: 20px 0;
`;

const MyTable = styled(Table)`
  text-align: center;

  th:nth-child(2), td:nth-child(2) {
    width: 50%; 
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MyBtn = styled.button`
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 6px;
  background-color: #636363;
  color: #fff;
  font-weight: bold;
  transition: 0.2s background ease-in;

  &:hover {
    background-color: #4c4c4c;
  }
`;

  return(
  <QnAContainer>
  <QnAInner>
    <TitleInner>
      <Title>리뷰</Title>
      <Explanation>고객님들의 Review</Explanation>
    </TitleInner>
    <TableInner>
      <MyTable hover>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회</th>
          </tr>
        </thead>
        <tbody>
          <tr> {/* tr 맵돌려서 onClick 하면 될듯...? css 커서 포인터로 바꾸고...*/} 
            <td>1</td>
            <td>테스트</td>
            <td>chacha</td>
            <td>2024-10-15</td>
            <td>2</td>
          </tr>
        </tbody>
      </MyTable>
      <BtnContainer>
        <MyBtn>글쓰기</MyBtn>
      </BtnContainer>
    {/* 페이지네이션 만들기 */}
    </TableInner>
  </QnAInner>
</QnAContainer>
)}

export default Review;