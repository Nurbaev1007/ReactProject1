import React from 'react'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import './style.css'
import './fonts/inter/stylesheet.css'
import './adaptation.css'

const App = () => {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
};

export default App;
