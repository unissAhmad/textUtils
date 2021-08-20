import React,{useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log('onclick was clicked'+text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnchange = (event)=>{
        console.log('onchange was  fired');
        setText(event.target.value);
    }
    const[text,setText] = useState('Enter text here');
    return (
        <div>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange = {handleOnchange}></textarea>
                    <button className="btn btn-primary"onClick={handleUpClick}>{props.btn1} </button>
               </div>
        </div>
    )
}
