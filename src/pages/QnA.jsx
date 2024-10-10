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


function QnA() {
  return (
    <QnAContainer>
      <QnAInner>
        <Title>Q&A</Title>
        <Explanation>1:1 질문을 위한 게시판 입니다.</Explanation>
      </QnAInner>
    </QnAContainer>
  );
};

export default QnA;