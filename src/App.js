import React, { useState } from 'react';
import './App.css';

function App() {

  const [drumQ] = useState(() => {
    return new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3")
  });
  const [drumW] = useState(() => {
    return new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3")
  });
  const [drumE] = useState(() => {
    return new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3")
  });
  const [drumA] = useState(() => {
    return new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3")
  });
  const [drumS] = useState(() => {
    return new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3")
  });
  const [drumD] = useState(() => {
    return new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3")
  });
  const [drumZ] = useState(() => {
    return new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3")
  });
  const [drumX] = useState(() => {
    return new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3")
  });
  const [drumC] = useState(() => {
    return new Audio("https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3")
  });

  const handleClick = e => {
    console.log(e);
    switch(e.target.innerText) {
      case "Q": document.getElementById("Q").play();
      document.getElementById("display").innerText = 'Q';
      break;
      case "W": document.getElementById("W").play();
      document.getElementById("display").innerText = 'W';
      break;
      case "E": document.getElementById("E").play();
      document.getElementById("display").innerText = 'E';
      break;
      case "A": document.getElementById("A").play();
      document.getElementById("display").innerText = 'A';
      break;
      case "S": document.getElementById("S").play();
      document.getElementById("display").innerText = 'S';
      break;
      case "D": document.getElementById("D").play();
      document.getElementById("display").innerText = 'D';
      break;
      case "Z": document.getElementById("Z").play();
      document.getElementById("display").innerText = 'Z';
      break;
      case "X": document.getElementById("X").play();
      document.getElementById("display").innerText = 'X';
      break;
      case "C": document.getElementById("C").play();
      document.getElementById("display").innerText = 'C';
      break;
      default:
        console.log("Something went wrong");
        break;
    }
  }
  const handleKeys = (e) => {
    console.log(String.fromCharCode(e.keyCode));
    switch(String.fromCharCode(e.keyCode)){
      case 'Q': document.getElementById("Q").play();
      document.getElementById("display").innerText = 'Q';
      break;
      case "W": document.getElementById("W").play();
      document.getElementById("display").innerText = 'W';
      break;
      case "E": document.getElementById("E").play();
      document.getElementById("display").innerText = 'E';
      break;
      case "A": document.getElementById("A").play();
      document.getElementById("display").innerText = 'A';
      break;
      case "S": document.getElementById("S").play();
      document.getElementById("display").innerText = 'S';
      break;
      case "D": document.getElementById("D").play();
      document.getElementById("display").innerText = 'D';
      break;
      case "Z": document.getElementById("Z").play();
      document.getElementById("display").innerText = 'Z';
      break;
      case "X": document.getElementById("X").play();
      document.getElementById("display").innerText = 'X';
      break;
      case "C": document.getElementById("C").play();
      document.getElementById("display").innerText = 'C';
      break;
      default:
        console.log("Something went wrong");
        break;
    }
  }
  return (

    <div onKeyDown={e => { handleKeys(e) }} id="drum-machine">
      <h1 id="name">Drum Machine</h1>
      <div id="display">
        </div>
      

      <button id="bass-drum" onClick={e => { handleClick(e) }} className="drum-pad">Q
        <audio id="Q"
          src={drumQ.src}
          className='clip' type="audio/mp3"
        />
      </button>

      <button id="bass-drum2" onClick={e => { handleClick(e) }} className="drum-pad">W
        <audio id="W" src={drumW.src}
          className='clip'
        />
      </button>

      <button id="bass-drum3" onClick={e => { handleClick(e) }} className="drum-pad">E
      <audio id="E" src={drumE.src}
          className='clip'
          type="audio/mp3" />
      </button>

      <button id="bass-drum4" onClick={e => { handleClick(e) }} className="drum-pad">A<audio id="A"
        className='clip' src={drumA.src}
      /></button>

      <button id="bass-dru5" onClick={e => { handleClick(e) }}  className="drum-pad">S<audio id="S"
        className='clip' src={drumS.src}
      /></button>

      <button id="bass-drum6" onClick={e => { handleClick(e) }} className="drum-pad">D<audio id="D"
        className='clip' src={drumD.src}
      /></button>

      <button id="bass-dru7" onClick={e => { handleClick(e) }} className="drum-pad">Z<audio id="Z"
        className='clip' src={drumZ.src}
      /></button>

      <button id="bass-drum8" onClick={e => { handleClick(e) }} className="drum-pad">X<audio id="X"
        className='clip' src={drumX.src}
      /></button>

      <button id="bass-drum9" onClick={e => { handleClick(e) }} className="drum-pad">C<audio id="C"
        className='clip' src={drumC.src}
      /></button>
    </div>
  );
}

export default App;