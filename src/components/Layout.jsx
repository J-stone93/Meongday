import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const LayOutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Layout() {
  return (
    <LayOutContainer>
      <Header/>
      <Outlet/>
      <Footer/>
    </LayOutContainer>
  );
};

export default Layout;