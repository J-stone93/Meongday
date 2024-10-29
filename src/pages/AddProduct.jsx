import styled from "styled-components";
import Image from 'react-bootstrap/Image';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addProduct } from "../features/productSlice";
import { useNavigate } from "react-router-dom";

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


function AddProduct() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('food');

  const navigate = useNavigate();

  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now(), // 고유 ID 생성
      name: title,
      description: content,
      price: Number(price),
      category,
      imgUrl: '/images/default.png' // 기본 이미지 설정
    };
    dispatch(addProduct(newProduct));
    alert("작성완료");
    navigate('/')
  };
  return(
    <QnAContainer>
      <QnAInner>
        <TitleInner>
          <Title>상품등록(관리자전용)</Title>
        </TitleInner>
      <AddQnAContainer>
        <AddQnATitle>
          <p>제목</p>
          <TitleInput type="text"  value={title} onChange={(e) => setTitle(e.target.value)} />
        </AddQnATitle>
        <AddQnATitle>
          <p>내용</p>
          <ContentInput type="text-area" value={content} onChange={(e) => setContent(e.target.value)}/>
        </AddQnATitle>
        <AddQnATitle>
        <p>가격</p>
          <TitleInput type="number"  onChange={(e) => setPrice(e.target.value)}/>
        </AddQnATitle>
        <label for="category">카테고리:</label>
        <select id="category" name="category"  value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="food">식음류</option>
          <option value="clothes">의류</option>
        </select>
        <AddQnAFile>
          <p>사진첨부</p>
          <Image src="holder.js/171x180" rounded />
          <ImgBtn htmlFor="input-file">
            파일선택
          </ImgBtn>
          <ImgFile type="file" id="input-file" accept = "image/*" multiple />
        </AddQnAFile>
      </AddQnAContainer>
      <button onClick={() => console.log("취소")}>취소</button>
      <button type="submit" onClick={handleAddProduct}>작성</button> {/* Submit이 더 적절한 것 같다. 변경하기 */}
      </QnAInner>
    </QnAContainer> 
  );
};

export default AddProduct;