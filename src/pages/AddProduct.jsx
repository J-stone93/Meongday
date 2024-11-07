import styled from "styled-components";
import Image from 'react-bootstrap/Image';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { addProduct, selectCategoryState } from "../features/productSlice";
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

const ImgContainer = styled.div`
    position: relative;
    width: 300px; /* 원하는 고정 크기 */
    height: 200px; /* 원하는 고정 크기 */
    overflow: hidden;
    border-radius: 8px;
    background-color: #f0f0f0;
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
    width: 120px;
    height: 40px;
  `;


function AddProduct() {
  const dispatch = useDispatch();
  // const productCategory = useSelector(selectCategoryState);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const fileEl = useRef(null);
  const [imgs, setImgs] = useState([]);

  const navigate = useNavigate();

  // const handleAddProduct = () => {
  //   const newProduct = {
  //     id: Date.now(), // 고유 ID 생성
  //     name: title,
  //     description: content,
  //     price: Number(price),
  //     category,
  //     imgUrl: '/images/default.png' // 기본 이미지 설정
  //   };
  //   dispatch(addProduct(newProduct));
  //   alert("작성완료");
  //   navigate('/')
  // };

  const handleAddProduct1 = async (e) => {
    e.preventDefault();

    if (!title || !content || !price || !category || !fileEl.current.files) {
      alert("모든 필드를 올바르게 입력해야 합니다.");
      return;
    }

    const files = fileEl.current.files;
    const formData = new FormData();
    formData.append("productNo", 0);
    formData.append("productName", title);
    formData.append("productPrice", price)
    formData.append("productContent", content);
    formData.append("productCategory", category);

    Array.from(files).forEach((file, index) => {
      formData.append("uploadFile", file);
    });

    // formData 내용 확인
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await axios.post(`http://localhost:8080/product/register`, formData
      );

      if (response && response.data) {
        console.log("API 응답 데이터:", response.data);
        alert("등록완료");
        navigate('/');
      } else {
        console.error("API 응답 데이터가 없습니다.");
      }
    } catch (error) {
      if (error.response) {
        console.error("응답 에러:", error.response.data);
        console.error("응답 상태:", error.response.status);
        console.error("응답 헤더:", error.response.headers);
      } else {
        console.error("요청 실패:", error.message);
      }
    }

  };

  const handleChangFile = (e) => {
    e.preventDefault();
    const files = Array.from(e.target.files); // 선택한 모든 파일을 배열로 변환
    const imgUrls = files.map(file => URL.createObjectURL(file)); // 각 파일의 URL 생성
    setImgs(prevImgs => [...prevImgs, ...imgUrls]);
  }

  return (
    <QnAContainer>
      <QnAInner>
        <TitleInner>
          <Title>상품등록(관리자전용)</Title>
        </TitleInner>
        <AddQnAContainer>
          <AddQnATitle>
            <p>제목</p>
            <TitleInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </AddQnATitle>
          <AddQnATitle>
            <p>내용</p>
            <ContentInput type="text-area" value={content} onChange={(e) => setContent(e.target.value)} />
          </AddQnATitle>
          <AddQnATitle>
            <p>가격</p>
            <TitleInput type="number" onChange={(e) => setPrice(e.target.value)} />
          </AddQnATitle>
          <label for="category">카테고리:</label>
          <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="food" onClick={() => setCategory("food")}>식음류</option>
            <option value="clothes" onClick={() => setCategory("clothes")}>의류</option>
          </select>
          <AddQnAFile>
            {/* <p>사진첨부</p> */}
            {imgs && imgs.map((imgUrl, index) => (
              <ImgContainer key={index}>
                <Image src={imgUrl} rounded />
              </ImgContainer>
            ))}
            <ImgBtn htmlFor="input-file">
              파일선택
            </ImgBtn>
            <ImgFile ref={fileEl} type="file" id="input-file" accept="image/*" multiple onChange={handleChangFile} />
          </AddQnAFile>
        </AddQnAContainer>
        <button onClick={() => console.log("취소")}>취소</button>
        <button type="button" onClick={handleAddProduct1}>작성</button> {/* Submit이 더 적절한 것 같다. 변경하기 */}
      </QnAInner>
    </QnAContainer>
  );
};

export default AddProduct;