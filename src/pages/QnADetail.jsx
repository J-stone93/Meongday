import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function QnADetail() {

const QnAContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px;
`;

const QnAInner = styled.div`
  width: 100%;
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

const navigate = useNavigate();

  return (
    <QnAContainer>
    <QnAInner>
      <TitleInner>
        <Title>Q&A</Title>
        <Explanation>1:1 질문을 위한 게시판 입니다.</Explanation>
      </TitleInner>
      <div> {/* border 네모네모하게 넣어주기 */}
        <p>테스트 제목</p>

        <div> {/* flex 해서 양끝으로 보내기 */}
          <p>2024-10-29</p>
          <p>chacha</p>
        </div>

        <p>테스트 내용</p>
        <div>사진</div>
        <button onClick={() => navigate('/QnA')}>목록</button>
      </div>

    </QnAInner>
  </QnAContainer>
  );
};

export default QnADetail;