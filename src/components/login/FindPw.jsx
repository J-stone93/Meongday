import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `

const LogoImg = styled.img`
  width: 500px;
  display: block;
  margin: 0 auto;
  `;

const LoginInput = styled.input`
  width: 550px;
  height: 45px;
  margin-bottom: 30px;
  border-radius: 8px;
  border: 1px solid #ccc;
`

const IdNameTag = styled.div`
  width: 550px;
  font-size: 20px;
  font-weight: 900;
  text-align: left;
  `

const NameTag = styled.div`
  width: 550px;
  font-size: 20px;
  font-weight: 900;
  text-align: left;
  `

  const NameTagInput = styled.input`
    width: 550px;
    height: 45px;
    margin-bottom: 30px;
    border-radius: 8px;
    border: 1px solid #ccc;
    background-color: #eee;
  `

const EmailTag = styled.div`
  width: 550px;
  font-size: 20px;
  font-weight: 900;
  text-align: left;
  `

const EmailTagInput = styled.input`
width: 550px;
height: 45px;
margin-bottom: 30px;
border-radius: 8px;
border: 1px solid #ccc;
`

const Button = styled.button`
  width: 550px;
  height: 45px;
  font-size: 20px;
  font-weight: bold;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 25px;
  margin-bottom: 50px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`;

function FindPw() {
    return (
        <Container>
            <LogoImg src="/images/meongday.png" alt="meongday" />
            <IdNameTag>아이디</IdNameTag>
            <LoginInput />
            <NameTag>이름</NameTag>
            <NameTagInput />
            <EmailTag>이메일</EmailTag>
            <EmailTagInput placeholder="example@email.com" />
            <Button>비밀번호 찾기</Button>
        </Container>
    );
};

export default FindPw;