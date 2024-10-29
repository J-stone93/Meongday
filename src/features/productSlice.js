import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  productList:[
    {
      id: 1,
      name: "멍피자 1p, 강아지피자",
      price: 5500,
      imgUrl: <img src="/images/meongday.png" width="50%" />
    },
    {
      id: 2,
      name: "멍쿠키 1p, 멍쿠키",
      price: 3500,
      imgUrl: <img src="/images/ggangSample.png" alt="멍태강1" width="50%" />
    },
    {
      id: 3,
      name: "왕왕쿠키 1p, 대왕쿠키",
      price: 6000,
      imgUrl: <img src="/images/ggangSample.png" alt="멍태강2" width="50%" />
    },
    {
      id: 4,
      name: "멍치즈 1p, 멍치즈",
      price: 5500,
      imgUrl: <img src="/images/ggangSample.png" alt="멍태강3" width="50%" />
    },
    {
      id: 5,
      name: "왕왕개껌 1p, 왕큰껌",
      price: 5500,
      imgUrl: <img src="/images/meongday.png" width="50%" />
    }
  ],
  selectedProduct: null
};

const productSlice = createSlice({
  name : 'product',
  initialState,
  reducers:{
   getAllProducts:(state, action)=>{
    state.productList = action.payload;
   },
   getSelectedProduct:(state,action)=>{
    state.selectedProduct = action.payload;
   },  //상품상세보기할때필요한듯
   addProduct: (state, action)=>{
    state.productList.push(action.payload);
   }
  }
});

export const {
  getAllProducts,
  getSelectedProduct,
  addProduct
} = productSlice.actions;

export const selectedAllProduct = (state)=>{
  return state.product.productList
};
export const selectSelectedProduct = (state)=>{
  return state.product.selectedProduct;
};
// 모든상품목록선택, 선택된 상품선택


export default productSlice.reducer;
