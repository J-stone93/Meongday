import { useEffect, useState } from "react";
import styled from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { IoMdSearch } from "react-icons/io";
import { ThemeProvider } from 'styled-components';

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
        <StyledMap center={showMap.center} level={5}>
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
            />
          ))}

        </StyledMap>
      </MapContainer>
    </>
    </ThemeProvider>
  );
};

export default Store;