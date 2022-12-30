import React from "react";
import MemeData from "../../MemeData";
function Mainmeme() {
  return (
    <div className="container">
      <div className="inputs">
        <input placeholder="Top Text" />
        <input placeholder="Bottom Text" />
      </div>
      <button className="changeMeme"> CHANGE MEME</button>
    </div>
  );
}

export default Mainmeme;
