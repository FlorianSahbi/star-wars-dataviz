import React, {useRef, useEffect} from 'react';

import './App.css';


function App() {
  let byline= "Le Réveil de la Force"
let bylineArry = byline.split('');
let span;
let letter;

  const bylineDomEl = useRef();
  console.log(bylineDomEl);
useEffect(()=>{
  for (let i = 0; i < bylineArry.length; i++) {
      const element = bylineArry[i];
      span = document.createElement("span");
      letter = document.createTextNode(element);
      
      if (element == '') {
        bylineDomEl.current.appendChild(letter);
        
      }else{
        span.appendChild(letter);
        bylineDomEl.current.appendChild(span);
      
      }
    
  }
}, [])

return (
    <div className="App">
      <div className = "starwars-demo" >
        <img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" className="star"></img>
        <img src = "//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars" className="wars"></img>
        <h2 ref={bylineDomEl} className="byline" id="byline"></h2>
      </div>
    </div>
  );
}

export default App;

