import React from 'react';
import Header from './components/Header';
import Main from './components/Main'
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
body{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: space-around;
}
header, main, footer{
  padding: 5vh 2vw;
}
h1{
  color: red;
}
h2{
  color: purple;
}
ul{
  padding: 2vh 2vw;
}
li{
  list-style: none;
}
h3{
  color: gray;
}
`

export default class App extends React.Component{

  render(){
    return(
      <>
      <GlobalStyle />
      <Header />
      <Main nome="Paula" idade={24} estudar="AWS"/>
      <Footer />
      </>
    )
  }
}