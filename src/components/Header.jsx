import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import { LuUser2 } from "react-icons/lu";
import { useNavigate } from "react-router-dom";


const HeaderContainer = styled.div`
  width: 100%;
  background-color: #fff;
`;

const HeaderInner = styled.div`
  width: 100%;
  max-width: 1440px;
  background-color: #ffffff;
  margin: 0 auto;
  font-size: 18px;
`;

const LogoImg = styled.img`
  width: 100px;
`;

const UserIcon = styled(LuUser2)`
  width: 30px;
  height: 30px;
`;

const NavContainer = styled.nav`
  &:hover > div {
    display: flex;
  }
`;


const SubMenu = styled.div`
  display: none;
  width: 100px;
  text-align: center;
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex-direction: column;
  ${Nav.Link}:hover + & {
    display: flex;
  }
`


function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderInner>

        <Navbar bg="white" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="/">
              <LogoImg src="/images/meongday.png" alt="meongday" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">멍데이</Nav.Link>
                <NavContainer>
                <Nav.Link href="#1">전체상품</Nav.Link>
                <SubMenu>
                  <Nav.Link onClick={() => navigate('/products')}>식음</Nav.Link>
                  <Nav.Link onClick={() => navigate('/products')}>의류</Nav.Link>
                </SubMenu>
                </NavContainer>
                <Nav.Link href="#2">커뮤니티</Nav.Link>
                <Nav.Link onClick={() => navigate('/QnA')}>Q&A</Nav.Link>
                <Nav.Link href="#4" onClick={() => navigate('/store')}>Store</Nav.Link>
              </Nav>
              <Nav>
                <NavDropdown title={<UserIcon />} id="collapsible-nav-dropdown">
                  <NavDropdown.Item onClick={() => navigate('/login')}>로그인</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    마이페이지
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;