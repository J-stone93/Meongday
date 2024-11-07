import { useState } from "react";
import styled from "styled-components";
import Image from 'react-bootstrap/Image';
import { GiCancel } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function AddQnA() {
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
    align-items: center;
    margin-bottom: 20px;
    margin-left: 40px;
    flex-wrap: wrap;
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
    cursor: pointer;
    padding: 6px 10px;
    border-radius: 12px;
    border: 1px solid #000000;
    color: #ffffff;
    background-color: #000;
  `;

  const CancelBtn = styled.button`
    width: 120px;
    height: 40px;
    border: 1px solid #cecece;
    color: #fff;
    background-color: #cecece;
    border-radius: 12px;
    font-size: 20px;
    transition: 0.2s background ease-in;
    
    &:hover {
      background-color: #aaaaaa;
    }
  `;

  const ConfirmBtn = styled.button`
  margin-left: 20px;
    width: 120px;
    height: 40px;
    border: none;
    border-radius: 12px;
    font-size: 20px;
    background-color: #4c4c4c;
    color: #fff;
    transition: 0.2s background ease-in;

    &:hover {
      background-color: #343434;
    }
  `;

  const BtnGroup = styled.div`
    display: flex;
    justify-content: end;
    margin-right: 80px;
  `;

  const ImgGroup = styled.div`
    position: relative;
    display: inline-block;
  `;

  const RemoveBtn = styled(GiCancel)`
    width: 26px;
    height: 26px;
    color: #000;
    cursor: pointer;
    position: absolute;
    z-index: 3;
    left: 275px;
    top: 20px;
  `;
  const [imgFiles, setImgFiles] = useState([]);
  const [imgPaths, setImgPaths] = useState([]);

  const navigate = useNavigate();

  const handleImgChange = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + imgFiles.length > 3) {
      alert("사진은 최대 3장까지 첨부할 수 있습니다.");
      return;
    }

    setImgFiles([...imgFiles, ...files]);
    setImgPaths([...imgPaths, ...files.map(file => URL.createObjectURL(file))]);
  };

  const handleRemoveImage = (index) => {
    const updatedFiles = imgFiles.filter((_, i) => i !== index);
    const updatedPaths = imgPaths.filter((_, i) => i !== index);

    setImgFiles(updatedFiles);
    setImgPaths(updatedPaths);
  };

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
            <ImgBtn htmlFor="input-file">사진첨부</ImgBtn>
            <ImgFile
              type="file"
              id="input-file"
              accept="image/*"
              multiple
              onChange={handleImgChange}
            />
            {imgPaths.map((path, index) => (
              <ImgGroup key={index}>
                <Image
                  src={path}
                  alt={`미리보기-${index}`}
                  thumbnail
                  style={{ maxWidth: "300px", margin: "10px" }}
                  onClick={() => window.open(path, "_blank")}
                />
                <RemoveBtn onClick={() => handleRemoveImage(index)} />
              </ImgGroup>
            ))}
          </AddQnAFile>
          <BtnGroup>
            <CancelBtn onClick={() => navigate('/QnA')}>취소</CancelBtn>
            <ConfirmBtn>작성</ConfirmBtn>
          </BtnGroup>
        </AddQnAContainer>
      </QnAInner>
    </QnAContainer>
  );
};

export default AddQnA;
