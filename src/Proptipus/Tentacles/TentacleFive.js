import React from "react";

function TentacleFive(props) {
  return (
    <div className="tentacle-five">
      <br/>
      <span className="magic-remote-text">Magic</span>
      <br/>
      <span className="magic-remote-text">Remote</span>
      <br/>
      <button className="magic-remote-button color-1" 
      onClick={props.decrementNumber}>-</button>
      <button className="magic-remote-button color-2" 
      onClick={props.incrementNumber}>+</button>
      <br/>
    </div>
  );
}

export default TentacleFive;
