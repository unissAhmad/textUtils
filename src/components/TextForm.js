import React,{useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log('onclick was clicked'+text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = ()=>{
        console.log('onclick was clicked'+text);
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }
    const handleOnchange = (event)=>{
        console.log('onchange was  fired');
        setText(event.target.value);
    }
    // const handleCopy=()=>{
    //     let text = document.getElementById('myBox');
    //     text.select();
    //     navigator.clipboard.writeText(text.value);
    // }
    // const handleExtraSpaces = ()=>{
    //     let newText = text.split(/[]+/);
    //     setText(newText.join(" "));
    // }
    const[text,setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode==='light'? 'black' : 'white'}}>
            <div className="mb-3">
              <h1>{props.heading}</h1>
              <textarea className="form-control" id="myBox" rows="8" value={text} onChange = {handleOnchange} style={{backgroundColor: props.mode==='light'? 'white' : 'black',color: props.mode==='light'? 'black' : 'white'}}></textarea>
              <button className="btn btn-primary my-3 mx-1"onClick={handleUpClick}>{props.btn1} </button>
              <button className="btn btn-primary my-3 mx-1"onClick={handleLoClick}>{props.btn2} </button>
              {/* <button className="btn btn-primary my-3 mx-1"onClick={handleCopy}>{props.btn3} </button> */}
            </div>
        </div>
        <div className="container my-3"style={{color: props.mode==='light'? 'black' : 'white'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
        <p>{text.length==0 ? "Enter text in text box above to preview it here":text}</p>
        </div>
        
        </>
    )
}
