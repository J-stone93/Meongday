import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const LayOutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1400px; /* 최대 너비 설정 */
  width: 100%; /* 전체 너비 설정 */
  margin: 0 auto; /* 중앙 정렬을 위해 자동 마진 */
  /* min-height: 100vh; 전체 화면 높이를 채우도록 설정 */
`;


function Layout() {
  return (
    <LayOutContainer>
      <Header />
      <Outlet />
      <Footer />
    </LayOutContainer>
  );
};

export default Layout;