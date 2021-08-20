import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
function App(){
  return(
    <>
       
  <Navbar title="TextUtils" contact = "Contact Us" about="About Utils"/>
  <div className="container my-3">
  <TextForm  heading = 'Enter the text to analyze' btn1="Convert to UPPERCASE"/>
  </div>
  </>
  );
}
export default App;