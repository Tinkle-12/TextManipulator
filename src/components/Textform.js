import React,{useState}from 'react'

export default function Textform(props) {
    const[text,setText]=useState("");
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
    const handleUpClick=()=>{
        setText(text.toUpperCase())
      props.showAlert("Converted to upper case !!", "success");
    }
    const handleLoClick=()=>{
        setText(text.toLowerCase())
      props.showAlert("Converted to lower case !!", "success");
    }
    const handleClearText=()=>{
        setText("")
      props.showAlert("Cleared !!", "success");
    }

    
  const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/)//regex 
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed !!","success");
  }
   const handleCopyText=()=>{
         navigator.clipboard.writeText(text);
         //our text was getting selected....so use the line below to deselect tht.
        props.showAlert("Copied to Clipboard !!", "success");
   }
  return (
    <>
     <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
       <h1 className='mb-4'>{props.heading}</h1>
              <div className="mb-3">
          <textarea class="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="8"></textarea>
              </div>
              {/* We can disable the button by passing a boolean value to the disabled attribute. */}
         <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleUpClick}>Convert to upper case</button>
        <button disabled={text.length=== 0}className = "btn btn-primary mx-3 my-1"onClick={handleLoClick}>Convert to lowercase </button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleClearText}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleCopyText}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={speak}>Speak</button>
          </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h2>Your text summary</h2>
            <li>No of characters = {text.length}</li>
            {/* we fixed the issue of no of words by using a higher order function named filter which said if the length of the word is zero then dnt add it in array */}
            <li>No of words = {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</li>
            {/* /\s+/ --> regex to count d words even when line is changed. */}
            <h3 className='my-2'>Preview</h3>
            <p>{text.length>0?text:'Enter your text in the  textbox above to be previewed here!!'}</p>
          </div>
    </>
  )
}
