import { useState } from "react";
import styled from "styled-components";

function addQnA() {
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


const TitleInner = styled.div`
  border-bottom: 1px solid black;
  width: 1180px;
  padding-bottom: 50px;
`;



// const [imgFile, setImgFile] = useState();
// const [imgPath, setImgPath] = useState("");

  return (
    <QnAContainer>
      <QnAInner>
        <TitleInner>
          <Title>QnA 작성하기</Title>
        </TitleInner>
      <div>
        <div>
          <div>제목</div>
          <input type="text" />
        </div>
        <div>
          <div>내용</div>
          <input type="text" />
        </div>
        <div>
          <div>사진첨부</div>
          <input type="file" accept = "image/*" multiple />
          <div>미리보기</div>
        </div>
      </div>
      <button>취소</button>
      <button>작성</button>
      </QnAInner>
    </QnAContainer> 
  );
};

export default addQnA;