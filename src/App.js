import React, { useState } from 'react';
import './App.css';

// const drawTriangle = (height) =>{
//   let value = parseInt(height);
//   let element = [];
//   for(let i = 1 ; i <= value ; i++){
//     for(let j = i ; j < value ; j ++){
//       element.push(<p>_</p>);
//     }
//   }
//   return element;
// }

function App() {
  const [height, setHeight] = useState(0);

  const [progressValue, setProgressValue] = useState(100);

  return (
    <div style={{marginLeft:10}}>
      {/* <h4>Triangle</h4>
      <div className="first-container">
        <div style={{ marginRight: 10 }}>
          <p>Enter Value</p>
        </div>
        <div>
          <input type="number" pattern="[0-9]" onChange={(event) => setHeight(event.target.value)}></input>
        </div>
      </div>

      <div className="triangle-container">
        {drawTriangle(height)}
      </div> */}

      <div style={{ marginTop: 100 }}>
        <h4>Progress bar</h4>
        <div className="middle-container">

          <div>
            <div className="circle-progress">
              <h3>{(progressValue < 0) ? setProgressValue(0) : (progressValue > 100) ? setProgressValue(100) : progressValue} %</h3>
            </div>
          </div>

        </div>

        <div className="middle-container">
          <div className="button-container">
            <button className="button-style" onClick={() => setProgressValue(progressValue - 5)}>-</button>
          </div>
          <div className="button-container">
            <button className="button-style" onClick={() => setProgressValue(progressValue + 5)}>+</button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
