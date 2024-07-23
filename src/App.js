import React from "react";
import Nav from "./components/Navbar/navbar";
import Head from "./components/Header/header"
import Avt from "./components/Avantage/avantage"
import Tmp from "./components/Template/template"
import Ctc from "./components/Contact/Contact"
import Foot from "./components/Footer/Footer"


import { SliderData } from "./components/Template/sliderData";

function App(){
  return(
    <div>
      <Nav />
      <Head/>
      <Avt />
      <Tmp slides={SliderData}/>
      <Ctc />
      <Foot />
 
    </div>
  );
}

export default App ;