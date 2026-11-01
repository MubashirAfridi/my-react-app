import React, { useState } from 'react'

function About() {
    const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "black"
   });
  
   const [btn, setBtn] = useState("Enable Light Mode");

 
   const toggleMode = () => {
    console.log("click")
    if (myStyle.color === "white") {
        setMyStyle({
            color: "black",
            backgroundColor: "white"
        })
        setBtn("Enable Dark Mode")
    } else {
        setMyStyle({
            color: "white",
            backgroundColor: "black"
        })
        setBtn("Enable Light Mode")
    }
   }
  return (
    <>
    <div className="container mt-10" style={myStyle}>
        <h1 className="mt-3">About</h1>
      <div className="accordion">
  <details className="accordion-item" name="accordionExample" open>
    <summary className="accordion-header" style={myStyle}>
      Accordion Item #1
      <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m2 5 6 6 6-6"/></svg>
    </summary>
    <div className="accordion-body" style={myStyle}>
      <strong>This is the first item’s accordion body.</strong> It is shown by default because the   attribute is present. The native  element handles all the show/hide logic without any JavaScript. You can put any HTML content within the .
    </div>
  </details>
  <details className="accordion-item" name="accordionExample">
    <summary className="accordion-header" style={myStyle}>
      Accordion Item #2
      <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m2 5 6 6 6-6"/></svg>
    </summary>
    <div className="accordion-body" style={myStyle}>
      <strong>This is the second item’s accordion body.</strong>  attribute groups this with other accordion items. When you open this item, any other open item in the same group will close automatically.
    </div>
  </details>
  <details className="accordion-item" name="accordionExample">
    <summary className="accordion-header" style={myStyle}>
      Accordion Item #3
      <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m2 5 6 6 6-6"/></svg>
    </summary>
    <div className="accordion-body" style={myStyle}>
      <strong>This is the third item’s accordion body.</strong> This exclusive accordion behavior is built into the browser—no Bootstrap JavaScript required. Just use matching  attributes on your  elements.
    </div>
  </details>
</div>
<button className="btn-solid theme-primary mt-3" onClick={toggleMode} >{btn}</button>
    </div>
    
    </>
  )
}

export default About;
