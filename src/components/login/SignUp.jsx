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

const PasswordDiv = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-between;
`

const IdDiv = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  `

const IdNameTag = styled.div`
  font-size: 20px;
  font-weight: 900;
`

const IdCheck = styled.div`
  font-size: 20px;
  color: #007aff;
  font-weight: 900;
`

const PwNameTag = styled.div`
  font-size: 20px;
  font-weight: 900;
  text-align: left;
`

const PasswordRule = styled.div`
  font-size: 13px;
  color: #007aff;
  font-weight: 900;
  cursor: pointer;
`

const NameTag = styled.div`
  width: 550px;
  font-size: 20px;
  font-weight: 900;
  text-align: left;
`

const EmailDiv = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-between;
  `

const EmailNameTag = styled.div`
  font-size: 20px;
  font-weight: 900;
`

const EmailCheck = styled.div`
  font-size: 20px;
  color: #007aff;
  font-weight: 900;
`

const NicknameTag = styled.div`
  width: 550px;
  font-size: 20px;
  font-weight: 900;
  text-align: left;
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

function SignUp() {
  return (
    <Container>
      <LogoImg src="/images/meongday.png" alt="meongday" />
      <IdDiv>
        <IdNameTag>아이디</IdNameTag>
        <IdCheck><input type="checkbox" style={{width:"18px",height:"18px"}}/>중복체크</IdCheck>
      </IdDiv>
      <LoginInput />
      <PasswordDiv>
        <PwNameTag>비밀번호</PwNameTag>
        <PasswordRule>영문,숫자 포함 8~15자리로 입력해주세요.</PasswordRule>
      </PasswordDiv>
      <LoginInput />
      <NameTag>이름</NameTag>
      <LoginInput />
      <EmailDiv>
        <EmailNameTag>이메일</EmailNameTag>
        <EmailCheck><input type="checkbox" style={{width:"18px",height:"18px"}}/>중복체크</EmailCheck>
      </EmailDiv>
      <LoginInput />
      <NicknameTag>닉네임</NicknameTag>
      <LoginInput />
      <Button>회원가입</Button>
    </Container>
  );
};

export default SignUp;