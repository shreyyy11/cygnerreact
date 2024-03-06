import React, {useState} from 'react'


export default function TextForm(props) {
  //states
  const[text, setText] = useState('');

  const handleUpClick =() => {
    setText(text.toUpperCase());
  }
  const handleLoClick =() => {
    setText(text.toLowerCase());
  }
  const handleClearClick =() => {
    setText(" ");
  }
  const handleOnchange =(event) => {
    setText(event.target.value);
  }


  const handleCopy= () => {
    console.log("i am copy");
    var text = document.getElementById("Box");
    text.select();
    navigator.clipboard.writeText(text.value);

}
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} id="Box" rows="7"></textarea>
        </div>
        <button className="btn btn-outline-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-outline-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
        <button className="btn btn-outline-primary mx-1" onClick={handleClearClick} >Clear Text</button>
        <button className="btn btn-outline-primary mx-1" onClick={handleCopy} >Copy Text</button>

    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 *  text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
  )
}
