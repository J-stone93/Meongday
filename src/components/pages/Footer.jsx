import styled from "styled-components";

const styledFooter = styled.footer`
  position: relative;
  bottom: 0;
  height: 80px;
  background-color: gray;
`;

function Footer() {
  return (
    <styledFooter>
      멍데이
    </styledFooter>
  );
};

export default Footer;