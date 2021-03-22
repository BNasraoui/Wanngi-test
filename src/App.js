import AwesomeFire from './images/SVG/AwesomeFire.svg';
import AwesomeMountain from './images/SVG/AwesomeMountain.svg';
import IonicIosThermometer from './images/SVG/IonicIosThermometer.svg';
import MetroDirectionsBike from './images/SVG/MetroDirectionsBike.svg';
import Rectangle135 from './images/SVG/Rectangle135.svg';
import Rectangle136 from './images/SVG/Rectangle136.svg';
import Rectangle137 from './images/SVG/Rectangle137.svg';
import Rectangle207 from './images/SVG/Rectangle207.svg';
import React, {useState} from 'react';
import './App.css';

function App(){
  const [iconBg, setIconBg] = useState(`${Rectangle135}`); // Icon states and their position in the array
  const [iconFg, setIconFg] = useState(`${AwesomeFire}`);
  const [bgPosition, setBgPosition] = useState(0);
  const [fgPosition, setFgPosition] = useState(0);

  const background = [`${Rectangle135}`, `${Rectangle136}`, `${Rectangle137}`, `${Rectangle207}`];
  const foreground = [`${AwesomeFire}`, `${AwesomeMountain}`, `${IonicIosThermometer}`, `${MetroDirectionsBike}`];
  
  function RandomizeButton(){
    var tempBg;
    var tempFg;
    
    do{
      tempBg = Math.floor(Math.random()*4);
      tempFg = Math.floor(Math.random()*4);
    }while((tempBg === bgPosition) || (tempFg === fgPosition)); // Guarantees icons and colours never repeat.

    setBgPosition(tempBg);
    setFgPosition(tempFg);
    setIconBg(background[bgPosition]);                        //Update background colour and icon
    setIconFg(foreground[fgPosition]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Icon Appearance Randomizer</h1>
        <p>Press the button to change the colour and symbol!</p>
        <div className = "icon-wrapper">
          <div className="background"><img src={iconBg} alt="colour"/></div>
          <div className="foreground"><img src={iconFg} alt="icon"/></div>
        </div>
        <button className="button" onClick={RandomizeButton}>Change Icon</button>
      </header>
    </div>
  );
}

export default App;
