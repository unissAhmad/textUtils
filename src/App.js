import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import React, { useState } from 'react';
// import About from "./components/About";

function App(){
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

  return(
    <>
       
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} contact = "Contact Us" about="About Utils"/>
  <div className="container my-3">
  <TextForm  heading = 'Enter the text to analyze' mode={mode} btn1="Convert to Uppercase"
    btn2 = "convert to Lowercase"
    btn3 = "Click to copy text"
    btn4 = "Remove extra spaces"
  />
  {/* <About/> */}
  </div>
  </>
  );
}
export default App;