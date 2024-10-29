import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import { IoMdSearch } from "react-icons/io";
import { ThemeProvider } from 'styled-components';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const theme = {
  colors: {
    primary: '#ffffff',  // primary 색상 정의
    white: 'black',    // white 색상 정의
    warning: '#c1c1c1',  // warning 색상 정의 (hover에 사용됨)
  },
};


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
  padding-bottom: 15px;
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

const SearchBtns = styled.div`
  /* position: absolute;
  top: 58px;
  right: 20px;
  z-index: 10;
  display: flex; */
  flex-direction: column;
  gap: 10px;

  button {
    width: 150px;
    padding: 15px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    font-size: 20px;
    margin-top: 15px;
    border: 2px solid #ccc;
    color: ${({ theme }) => theme.colors.white};
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.warning};
  }
`;

const Overlay = styled.div`
  border: 1px solid #bbb;
  border-radius: 8px;
  background-color: #ffffff; /* 배경색을 흰색으로 설정 */
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Arrow = styled.div`
  width: 20px;
  height: 10px;
  overflow: hidden;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    border: 1px solid #bbb; /* 화살표 테두리 색상 */
    background-color: #ffffff; /* 화살표 배경색을 흰색으로 설정 */
    transform: rotate(45deg);
    transform-origin: 0 0;
    position: absolute;
    bottom: 6px;
    left: 50%;
  }
`;

const DetailLink = styled.a`
  background-color: #0d8de2; /* 배경색을 경고 색상으로 설정 */
  text-align: center;
  padding: 10px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const PlaceName = styled.span`
  font-size: 16px;
  padding: 5px 8px 5px 8px;
`;

// 조심


const { kakao } = window;

const KEYWORD_LIST = [
  { id: 1, value: '애견카페', emoji: '☕️' },
  { id: 2, value: '동물병원', emoji: '🧑‍⚕️' },
  { id: 3, value: '애견호텔', emoji: '🏨' },
];

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

  const [search, setSearch] = useState([]);

  const [showMap, setShowMap] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  // 카카오 맵에 접근해 지도 상태 조작하는 상태 변수
  const [map, setMap] = useState(null);
  // 검색에 사용될 키워드를 관리하는 상태 변수
  const [keyword, setKeyword] = useState('애견카페');
  // 검색 결과의 페이지네이션 정보를 관리하는 상태 변수
  const [pagination, setPagination] = useState(null);
  // 현재 페이지 번호를 관리하는 상태 변수
  // 페이지네이션 기능과 연동해 어떤 페이지를 보고 있는지 나타냄
  const [currentPage, setCurrentPage] = useState(1);
  // 현재 열려있는 마커의 ID를 관리하는 상태 변수
  const [openMarkerId, setOpenMarkerId] = useState(null);
  // 사이드바의 열림/닫힘 상태를 관리하는 상태 변수

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setShowMap((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }));
        },
        (err) => {
          setShowMap((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        },
      );
    } else {
      setShowMap((prev) => ({
        ...prev,
        errMsg: 'geolocation을 사용할수 없어요..',
        isLoading: false,
      }));
    }
  }, []);


  // 카테고리 검색으로 주변 위치 검색하기
  const searchPlaces = (keyword) => {
    // 현재 위치가 없을 경우 함수 종료
    if (!showMap.center) return;
    // places 서비스 객체 생성
    const ps = new kakao.maps.services.Places();
    // 검색 옵션 설정
    const options = {
      location: new kakao.maps.LatLng(showMap.center.lat, showMap.center.lng),
      radius: 15000,
      sort: kakao.maps.services.SortBy.DISTANCE,
    };

    // Places 서비스의 keywordSearch 메소드 호출
    ps.keywordSearch(
      keyword,
      (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          setSearch(data); // 검색 결과를 search 상태에 저장
        } else {
          console.error('검색에 실패하였습니다.');
        }
      },
      options, // 검색 옵션 전달
    );
  };

  // 마커의 위치로 지도의 중심 좌표 이동하기
  const moveLatLng = (data) => {
    if (!map) return;
    const newLatLng = new kakao.maps.LatLng(data.y, data.x);
    map.panTo(newLatLng);
  };

  // 클릭한 마커로 중심 좌표 이동 및 검색 수행 함수
  useEffect(() => {
    if (!map) return;
    setOpenMarkerId(null);
    searchPlaces(currentPage);
  }, [showMap, keyword, currentPage]);

  // 마커 클릭 시 CustomOverlayMap를 열고 닫는 함수
  useEffect(() => {
    if (!map) return;
    const clickListener = () => {
      setOpenMarkerId(null);
    };
    kakao.maps.event.addListener(map, 'click', clickListener);

    return () => {
      kakao.maps.event.removeListener(map, 'click', clickListener);
    };
  }, [map]);

  // 카카오톡 공유 init 설정
  useEffect(() => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init('9090c2064fcc57dc757ac8e1393cdcf4');
      }
    }
  }, []);

  if (showMap.isLoading) return <div>Loading...</div>;

  return (
    <ThemeProvider theme={theme}>
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
              {/* <p>병원</p>
            <p>카페</p> */}

              <SearchBtns>
                {KEYWORD_LIST.map((keywordObj) => (
                  <button key={keywordObj.id} type='button' onClick={() => searchPlaces(keywordObj.value)}>
                    {keywordObj.value}
                  </button>
                ))}
              </SearchBtns>

            </SearchBarInfo>
          </MapSidebar>
          {/* <StyledMap
          center={{ lat: 37.477845, lng: 126.513889 }}
          level={3}
        /> */}
          <StyledMap center={showMap.center} level={5} onCreate={setMap}>
            {/* 현재 위치 마커 표시 */}
            <MapMarker
              position={showMap.center}
              image={{
                src: 'https://cdn-icons-png.flaticon.com/128/7124/7124723.png',
                size: {
                  width: 40,
                  height: 40,
                },
              }}
            />
            {/* 검색된 장소 마커 표시 */}
            {search.map((data) => (
              <MapMarker
                key={data.id}
                position={{ lat: data.y, lng: data.x }}
                image={{
                  src: 'https://cdn-icons-png.flaticon.com/128/2098/2098567.png',
                  size: {
                    width: 35,
                    height: 35,
                  },
                }}
                onClick={() => {
                  if (data.id === openMarkerId) {
                    setOpenMarkerId(null);
                  } else {
                    setOpenMarkerId(data.id);
                    moveLatLng(data);
                  }
                }}
              />
            ))}
            {/* 검색된 장소 마커 표시 */}
            {search.map((data) => (
              <React.Fragment key={data.id}>
                <MapMarker
                  key={data.id}
                  position={{ lat: data.y, lng: data.x }}
                  image={{
                    src: 'https://cdn-icons-png.flaticon.com/128/2098/2098567.png',
                    size: {
                      width: 35,
                      height: 35,
                    },
                  }}
                  onClick={() => {
                    if (data.id === openMarkerId) {
                      setOpenMarkerId(null);
                    } else {
                      setOpenMarkerId(data.id);
                      moveLatLng(data);
                    }
                  }}
                />
                {/* 해당 마커에 커스텀 오버레이 표시 */}
                {openMarkerId === data.id && (
                  <CustomOverlayMap yAnchor={2.1} position={{ lat: data.y, lng: data.x }} clickable>
                    <Overlay>
                      <Arrow />
                      <PlaceName>{data.place_name}</PlaceName>
                      {/* 상세 정보로 연결되는 링크 */}
                      <DetailLink href={data.place_url} target='_blank'>
                        {/* <img src={<FaAngleRight />} alt='오른쪽 화살표' /> */}
                        <FaAngleRight/>
                      </DetailLink>
                    </Overlay>
                  </CustomOverlayMap>
                )}
              </React.Fragment>
            ))}
          </StyledMap>
        </MapContainer>
      </>
    </ThemeProvider>
  );
};

export default Store;