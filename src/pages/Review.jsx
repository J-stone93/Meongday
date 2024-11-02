import { useState } from "react";
import { Pagination, Table } from "react-bootstrap";
import styled from "styled-components";

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

function Review() {

  const review = [
    {
      productReviewNo : 1,
      productNo : 1,
      writer: 'bbq5883',
      reviewContent: "강아지가 잘먹어요",
      reviewScore: 2,
      modDate: "2024.10.10"      
    },
    {
      productReviewNo : 2,
      productNo : 1,
      writer: 'kimkim',
      reviewContent: "매우매우 좋아요",
      reviewScore: 5,
      modDate: "2024.10.11"      
    },
  ]

  // const[review, setReview] = useState([]);

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
            <th>평점</th>
            <th>내용</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {review.map((r)=>{
             const stars = Array.from({ length: 5 }, (_, index) => {  //Array.from의 콜백함수(현재의배열요소,index)
              return index >= 5 - r.reviewScore ? '★' : '☆';
            });
            return(
            <tr key={r.productReviewNo}>
              <td>{stars}</td>
              <td>{r.reviewContent}</td>
              <td>{r.writer}</td>
              <td>{r.modDate}</td>
            </tr>
            )
          })}
        </tbody>
      </MyTable>
      <BtnContainer>
        <MyBtn>리뷰작성</MyBtn>
      </BtnContainer>
    {/* 페이지네이션 만들기 */}
    </TableInner>
  </QnAInner>
</QnAContainer>
)}

export default Review;