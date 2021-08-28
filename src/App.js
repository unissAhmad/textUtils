import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
 

function App(){
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode has been enabled","success");
      document.title='textUtils - Dark mode';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='textUtils - Light mode'; 
    }
  }
  const[alert,setAlert]= useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return(
  <>
      <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} contact = "Contact Us" about="About Utils"/>
    <div className="container my-3">
        <Alert alert = {alert}/>
        <Switch>
          <Route exact path="/about">
            <About mode = {mode}/>
          </Route>
          <Route exact path="/">
          <TextForm  heading = 'Enter the text to analyze' showAlert={showAlert} mode={mode} btn1="Convert to Uppercase"  
            btn2 = "convert to Lowercase"
            btn3 = "Click to copy text"
            btn4 = "Remove extra spaces"
           />
          </Route>
        </Switch>
    </div>
    </Router>
  </>
  );
}
export default App;