import React from 'react';
export default function About(props) {
    // const [myStyle, setmyStyle] = useState( {
    //     backgroundColor: 'white',
    //     color: 'black',
    // });
    let noBorder = {
        color: props.mode==="dark" ? 'white':'black',
        backgroundColor: props.mode==="dark" ? 'black':'white',
        border: 'none',
        borderColor: "dark" ? 'white':'black'
        }
    let myStyle = {
        color: props.mode==="dark" ? 'white':'black',
        backgroundColor: props.mode==="dark" ? 'black':'white',
        border: '1px solid',
        borderColor: "dark" ? 'white':'black'
    }

    
    return (
        <>
    <div style={noBorder} >
        <h1 className="my-2">About Us</h1>
        <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                <strong>Analyze your text</strong>
            </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body"style={myStyle}>
            Textutils gives you a way to analyze your text quickly and efficiently. gives you word count, character count and average time to reading
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
               <strong>Free to use</strong>
            </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body"style={myStyle}>
            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button collapsed"style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body"style={myStyle}>
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
            </div>
        </div>
        </div>
        <div style={{marginTop: '100px'}}>
        <p>This is an open source react-app</p>
        <p>Source code of this is app is available on my gitHub</p>
        <p><a href="github.com/unissAhmad/textUtils" style={{textDecoration:'none'}}>click here to checkout source code</a></p>
        <p>Designed and devaloped by <a href="linkedin.com/in/uniss/"style={{textDecoration:'none'}}>Uniss</a></p>
        <p></p>
        <p></p>
        </div>
    </div>
   
        </>
    )
}
