import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";

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
    </LayOutContainer>
  );
};

export default Layout;