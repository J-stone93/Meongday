import styled from "styled-components";
import { SiNaver } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiKakaotalk } from "react-icons/si";

const StyledFooter = styled.footer`
  /* position: fixed; */
  /* bottom: 0; */
  width: 1400px;
  height: 80px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 24px;
  border-top: 2px solid black;
  z-index: 9;
  background-color: #ffffff;
`;

const IconContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 300px;

  a {
    text-decoration: none;
    color: black;
  }
`;

const InstagramIcon = styled(SiInstagram)`
  width: 38px;
  height: 38px;
  cursor: pointer;
  `;

const NaverIcon = styled(SiNaver)`
  width: 38px;
  height: 38px;
  cursor: pointer;
  `;

const KakaoIcon = styled(SiKakaotalk)`
  width: 38px;
  height: 38px;
  cursor: pointer;
`;



function Footer() {
  return (
    <>
      <StyledFooter>
        <div>
          &copy; Meongday
        </div>
        <IconContainer>
          <a href="https://www.instagram.com/meongday_/" target="_blank" ><InstagramIcon/> </a>
          <a href="https://smartstore.naver.com/meongday_" target="_blank" ><NaverIcon/> </a>
          <a href="https://pf.kakao.com/_xaBQxcxj" target="_blank" ><KakaoIcon/> </a>
          
          
        </IconContainer>
      </StyledFooter>
    </>
  );
};

export default Footer;