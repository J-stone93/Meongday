import { useNavigate, useParams } from "react-router-dom";
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

const DetailContainer = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
`;

const Header = styled.div`
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
  margin-bottom: 30px;
`;

const TitleQnA = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #333;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 14px;
  margin-top: 10px;
`;

const Author = styled.span`
  font-weight: 500;
`;

const Date = styled.span``;

const Content = styled.div`
  min-height: 500px;
  font-size: 16px;
  line-height: 1.8;
  color: #444;
  margin-top: 20px;
  white-space: pre-line;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
  justify-content: center;
`;

const Image = styled.img`
  width: 300px;
  height: auto;
  border-radius: 4px;
  border: 1px solid #ddd;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 30px;
  padding-top: 20px;
`;

const LeftButtonGroup = styled.div`
  display: flex;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease;
`;

const BackButton = styled(Button)`
  background-color: #e0e0e0;
  color: #ffffff;

  &:hover {
    background-color: #c0c0c0;
  }
`;

const EditButton = styled(Button)`
  background-color: #636363;
  color: #fff;
  margin-left: 20px;

  &:hover {
    background-color: #4c4c4c;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #ff7676;
  color: #fff;

  &:hover {
    background-color: #ff2727;
  }
`;


const navigate = useNavigate();
const { qnaNo } = useParams();

const sampleData = {
  no: qnaNo,
  title: "문의사항에 대한 상세 제목",
  author: "사용자1",
  date: "2024-11-07",
  content: "이곳에 상세 내용을 작성합니다.\n여러 줄에 걸쳐 작성할 수 있습니다.",
  images: [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ],
};

  return (
    <QnAContainer>
    <QnAInner>
      <TitleInner>
        <Title>Q&A</Title>
        <Explanation>1:1 질문을 위한 게시판 입니다.</Explanation>
      </TitleInner>
      <DetailContainer>
      <Header>
        <TitleQnA>{sampleData.title}</TitleQnA>
        <Info>
          <Author>작성자: {sampleData.author}</Author>
          <Date>작성일: {sampleData.date}</Date>
        </Info>
      </Header>
      <Content>{sampleData.content}</Content>
      
      <ImageContainer>
        {sampleData.images.map((src, index) => (
          <Image 
          key={index} 
          src={src} 
          alt={`첨부 이미지 ${index + 1}`} 
          onClick={() => window.open(src, "_blank")}
          />
        ))}
      </ImageContainer>

      <ButtonGroup>
        <LeftButtonGroup>
          <BackButton onClick={() => navigate(-1)}>목록</BackButton>
          <EditButton onClick={() => alert("수정 페이지로 이동")}>수정</EditButton>
        </LeftButtonGroup>
        <DeleteButton>삭제</DeleteButton>
      </ButtonGroup>
      <div>
        <div>댓글</div>
        <div>
          <div>댓글 목록</div>
        </div>
        <input type="text" />
      </div>
    </DetailContainer>
    </QnAInner>
  </QnAContainer>
  );
};

export default QnADetail;
