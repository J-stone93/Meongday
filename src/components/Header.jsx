import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import { LuUser2 } from "react-icons/lu";


const HeaderContainer = styled.div`
  width: 100%;
  height: 156px;
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

function Header() {
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
                <Nav.Link href="#features">게시판1</Nav.Link>
                <Nav.Link href="#1">게시판2</Nav.Link>
                <Nav.Link href="#2">게시판3</Nav.Link>
                <Nav.Link href="#3">게시판4</Nav.Link>
              </Nav>
              <Nav>
                <NavDropdown title={<UserIcon />} id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">로그인</NavDropdown.Item>
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