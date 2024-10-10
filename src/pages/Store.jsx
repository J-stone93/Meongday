import { useEffect } from "react";
import styled from "styled-components";
import { Map } from "react-kakao-maps-sdk";

const MapHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px;
  font-size: 24px;
  font-weight: 700;
`;

const MapContainer = styled.div`
  display: flex;
  `;

const MapSidebar = styled.div`
  border: 2px solid black;
  width: 200px;
  height: 500px;
  margin-right: 15px;
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

  return (
    <>
      <MapHeader>
        <div>
          <span>근처 카페 병원 정보</span>

        </div>
      </MapHeader>
      <MapContainer>
        <MapSidebar>

        </MapSidebar>
        <Map
          center={{ lat: 33.450701, lng: 126.570667 }}
          style={{ width: '1000px', height: '500px' }}
          level={3}
        />
      </MapContainer>
    </>
  );
};

export default Store;