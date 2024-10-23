import { useState } from "react";
import styled from "styled-components";
import Image from 'react-bootstrap/Image';

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

const AddQnAContainer = styled.div`
  width: 100%;
  padding: 40px 0px;
`;

const AddQnATitle = styled.label`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
`;

const AddQnAFile = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
`;

const TitleInput = styled.input`
  width: 1000px;
  margin-left: 30px;
`;

const ContentInput = styled.textarea`
  width: 1000px;
  margin-left: 30px;
  height: 400px;
  resize: none;
`;

const ImgFile = styled.input`
  display: none;
`;

const ImgBtn = styled.label`
  margin-left: 20px;
  cursor: pointer;
  background-color: #999;
  padding: 6px 25px;
  border-radius: 12px;
`;


// const [imgFile, setImgFile] = useState();
// const [imgPath, setImgPath] = useState("");

  return (
    <QnAContainer>
      <QnAInner>
        <TitleInner>
          <Title>QnA 작성하기</Title>
        </TitleInner>
      <AddQnAContainer>
        <AddQnATitle>
          <p>제목</p>
          <TitleInput type="text" />
        </AddQnATitle>
        <AddQnATitle>
          <p>내용</p>
          <ContentInput type="text-area" />
        </AddQnATitle>
        <AddQnAFile>
          <p>사진첨부</p>
          <Image src="holder.js/171x180" rounded />
          <ImgBtn htmlFor="input-file">
            파일선택
          </ImgBtn>
          <ImgFile type="file" id="input-file" accept = "image/*" multiple />
        </AddQnAFile>
      </AddQnAContainer>
      <button>취소</button>
      <button>작성</button>
      </QnAInner>
    </QnAContainer> 
  );
};

export default addQnA;