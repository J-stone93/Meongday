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

const Button = styled.button`
  width: 205px;
  height: 45px;
  font-size: 20px;
  font-weight: bold;
  background-color: #ccc;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 25px;
  cursor: pointer;

  &:hover {
    background-color: #bbb;
  }
`;

const PasswordDiv = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-between;
`

const IdDiv = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-between;
`

const IdNameTag = styled.div`
  font-size: 20px;
  font-weight: 900;
`

const ForgetId = styled.div`
  font-size: 15px;
  color: #007aff;
  font-weight: 900;
  text-align: left;
  cursor: pointer;
`

const PwNameTag = styled.div`
  font-size: 20px;
  font-weight: 900;
`

const ForgetPassword = styled.div`
  font-size: 15px;
  color: #007aff;
  font-weight: 900;
  text-align: left;
  cursor: pointer;
`

const SignUpDiv = styled.div`
  width: 550px;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  `

const NoId = styled.div`
  font-size: 15px;
  font-weight: 900;
  margin-right: 5px;
`

const MakeId = styled.div`
  font-size: 15px;
  color: #007aff;
  font-weight: 900;
  cursor: pointer;
`

function Login() {
  return (
    <Container>
      <LogoImg src="/images/meongday.png" alt="meongday" />
      <IdDiv>
        <IdNameTag>아이디</IdNameTag>
        <ForgetId>
          <Link to="/findid">아이디를 잊으셨나요?</Link>
        </ForgetId>
      </IdDiv>
      <LoginInput />
      <PasswordDiv>
        <PwNameTag>비밀번호</PwNameTag>
        <ForgetPassword>
          <Link to="/findpw">비밀번호를 잊으셨나요?</Link>
        </ForgetPassword>
      </PasswordDiv>
      <LoginInput />
      <Button>로그인</Button>
      <SignUpDiv>
        <NoId>아이디가 없으신가요?</NoId>
        <MakeId>
          <Link to="/signup">아이디만들기</Link>
        </MakeId>
      </SignUpDiv>
    </Container>
  );
};

export default Login;