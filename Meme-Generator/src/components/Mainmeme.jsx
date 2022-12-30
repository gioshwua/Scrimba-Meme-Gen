import React from "react";
import MemeData from "../../MemeData";
function Mainmeme() {
  const [meme, memeSet] = React.useState("https://i.imgflip.com/1bil.jpg");

  const changeMeme = () => {
    const memeArr = MemeData.data.memes;
    const randomNum = Math.floor(Math.random() * memeArr.length);
    const randomUrl = memeArr[randomNum].url;
    memeSet(randomUrl);
  };

  return (
    <div className="container">
      <div className="inputs">
        <input placeholder="Top Text" />
        <input placeholder="Bottom Text" />
      </div>
      <button className="changeMeme" onClick={changeMeme}>
        {" "}
        CHANGE MEME
      </button>
      <img src={meme} />
    </div>
  );
}

export default Mainmeme;
