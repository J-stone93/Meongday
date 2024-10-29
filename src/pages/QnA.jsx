import { Pagination, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
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

function QnA() {
  const navigate = useNavigate();

  const qnaList = [
    { no: 3, title: "테스트3", author: "chacha", date: "2024-10-15", views: 5, content: "안녕테스트" },
    { no: 2, title: "테스트2", author: "chacha", date: "2024-10-14", views: 3, content: "안녕테스트"  },
    { no: 1, title: "테스트1", author: "chacha", date: "2024-10-13", views: 7, content: "안녕테스트"  },
  ];

  return (
    <QnAContainer>
      <QnAInner>
        <TitleInner>
          <Title>Q&A</Title>
          <Explanation>1:1 질문을 위한 게시판 입니다.</Explanation>
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
              {qnaList.map((QnA) => (
                <tr key={QnA.no}>
                  <td>{QnA.no}</td>
                  <td onClick={() => navigate(`/QnA/${QnA.no}`)} style={{ cursor: 'pointer' }}>
                    {QnA.title}
                  </td>
                  <td>{QnA.author}</td>
                  <td>{QnA.date}</td>
                  <td>{QnA.views}</td>
                </tr>
              ))}
            </tbody>
          </MyTable>
          <BtnContainer>
            <MyBtn onClick={() => navigate('/addQnA')}>글쓰기</MyBtn>
          </BtnContainer>
          {/* 페이지네이션 만들기 */}
        </TableInner>
      </QnAInner>
    </QnAContainer>
  );
};

export default QnA;
