import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Layout from './components/Layout';
import QnA from './pages/QnA';
import Login from './components/login/Login';
import Store from './pages/Store';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import AddQnA from './pages/AddQnA';
import SignUp from './components/login/SignUp';
import AddProduct from './pages/AddProduct';
import QnADetail from './pages/QnADetail';





const GlobalStyle = createGlobalStyle`
  body{
    box-sizing: border-box;
  }

`;


function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path='/' element={<Main />} />
            <Route path='/addProduct' element = {<AddProduct />}/>
            <Route path='/products' element={<Products/>} />
            <Route path='/productDetail/:productId' element={<ProductDetail />} />
            <Route path='/cart' element = {<Cart />}/>
            <Route path='/store' element={<Store />} />
            <Route path='/QnA' element={<QnA />} />
            <Route path='/addQnA' element={<AddQnA />} />
            <Route path="/QnA/:qnaNo" element={<QnADetail />} />
          </Route>
            <Route path="/login" element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
