import { useEffect, useState } from "react";
import styled from "styled-components";
import { Map } from "react-kakao-maps-sdk";
import { IoMdSearch } from "react-icons/io";

const MapHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
  padding-bottom: 30px;
  `;

const SearchBar = styled.div`
  display: flex;
  padding: 15px 5px 10px 5px;
  justify-content: end;
`;

const SearchBarInfo = styled.div`
  display: block;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const StyleInput = styled.input`
  width: 100%;
  border: none;
  &:focus{
    outline: none;
  }
`;

const SearchIcon = styled(IoMdSearch)`
  font-size: 25px;
  cursor: pointer;
`;

const TitleContainer = styled.div`
  border-bottom: 2px solid black;
  width: 1000px;
  display: flex;
  justify-content: center;
`;

const MapContainer = styled.div`
  height: 600px;
  display: flex;
  `;

const MapSidebar = styled.div`
  border: 2px solid #ccc;
  width: 200px;
  height: 500px;
  margin-right: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); 
`;

const StyledMap = styled(Map)`
  width: 800px;
  height: 500px;
  border: 2px solid #ccc; /* 지도 테두리 추가 */
  border-radius: 10px; /* 모서리 둥글게 */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); 
`;


const { kakao } = window;

function Store() {

  // useEffect(() => {
  //   const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
  //   const options = { //지도를 생성할 때 필요한 기본 옵션
  //     center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
  //     level: 3 //지도의 레벨(확대, 축소 정도)
  //   };

  //   const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  // }, []);

  const [showSearchInput, setShowSearchInput] = useState(false);

  const toggleSearchInput = () => {
    setShowSearchInput((prev) => !prev);
  }

  return (
    <>
      <MapHeader>
        <TitleContainer>
          <div>
            <span>근처 카페 병원 정보</span>
          </div>
        </TitleContainer>
      </MapHeader>
      <MapContainer>
        <MapSidebar>
          <SearchBar>
            <SearchIcon onClick={toggleSearchInput} />
            {showSearchInput && <StyleInput type="text" placeholder="검색" />}
          </SearchBar>
          <SearchBarInfo>
            <p>병원</p>
            <p>카페</p>
          </SearchBarInfo>
        </MapSidebar>
        <StyledMap
          center={{ lat: 37.477845, lng: 126.513889 }}
          level={3}
        />
      </MapContainer>
    </>
  );
};

export default Store;