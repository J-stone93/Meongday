import logo from './logo.svg';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/pages/Main';

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
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
