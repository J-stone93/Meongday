import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";

export const store = configureStore({
  reducer:{
    product : productReducer
  }
});


// configureStore를 쓰면 Redux Devtools 설정이 자동으로 추가됨.
// 전역 스토어에 리듀서 함수들 등록,리듀서 : 상태(state)를 업데이트 하기 위한 함수