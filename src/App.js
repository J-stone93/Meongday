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
import AddQnA from './pages/AddQnA';





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
            <Route path='/products' element={<Products/>} />
            <Route path='/store' element={<Store />} />
            <Route path='/QnA' element={<QnA />} />
            <Route path='/addQnA' element={<AddQnA />} />
          </Route>
            <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
