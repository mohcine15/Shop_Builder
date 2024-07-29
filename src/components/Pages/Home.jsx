import React from "react";
import Nav from "../Navbar/navbar";
import Head from "../Header/header"
import Avt from "../Avantage/avantage"
import Tmp from "../Template/template"
import Ctc from "../Contact/Contact"
import Foot from "../Footer/Footer"
import { SliderData } from "../Template/sliderData";

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