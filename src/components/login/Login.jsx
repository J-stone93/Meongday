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

const NameTag = styled.div`
  width: 550px;
  font-size: 20px;
  font-weight: 900;
  text-align: left;
`

function Login() {
  return (
    <Container>
      <LogoImg src="/images/meongday.png" alt="meongday" />
      <NameTag>아이디</NameTag>
      <LoginInput />
      <NameTag>비밀번호</NameTag>
      <LoginInput />
      <Button>로그인</Button>
    </Container>
  );
};

export default Login;