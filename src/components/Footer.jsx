import styled from "styled-components";
import { SiNaver } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiKakaotalk } from "react-icons/si";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 1000px;
  height: 80px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 24px;
  border-top: 2px solid black;
`;

const IconContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;



function Footer() {
  return (
    <>
      <StyledFooter>
        <div>
          &copy; Meongday
        </div>
        <IconContainer>
          <SiInstagram/> 
          <SiNaver/>
          <SiKakaotalk/>
        </IconContainer>
      </StyledFooter>
    </>
  );
};

export default Footer;