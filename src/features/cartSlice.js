import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList:[
    {
      id: 1,
      name: "멍피자 1p, 강아지피자",
      price: 5500,
      imgUrl: <img src="/images/meongday.png" width="50%" />
    },
    {
      id: 3,
      name: "왕왕쿠키 1p, 대왕쿠키",
      price: 6000,
      imgUrl: <img src="/images/ggangSample.png" alt="멍태강2" width="50%" />
    }
  ]
};

const cartSlice = createSlice({
  name : Cart,
  initialState,
  reducers:{
  }
  }
)