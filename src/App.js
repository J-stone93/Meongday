import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Layout from './components/Layout';
import Store from './pages/Store';


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
            <Route path='/store' element={<Store />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
