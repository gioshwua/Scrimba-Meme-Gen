import React from "react";
function Mainmeme() {
  const [meme, memeSet] = React.useState({
    memeImg: "https://i.imgflip.com/1ur9b0.jpg",
    toptext: "",
    bottomText: "",
  });
  const [memeFetch, fetchSet] = React.useState([]);
  const changeMeme = () => {
    const randomNum = Math.floor(Math.random() * memeFetch.length);
    const randomUrl = memeFetch[randomNum].url;
    memeSet(function (prev) {
      return {
        ...prev,
        memeImg: randomUrl,
      };
    });
  };
  const typerChange = (event) => {
    const { name, value } = event.target;
    memeSet(function (prev) {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => fetchSet(data.data.memes));
  }, []);
  return (
    <div className="container">
      <div className="inputs">
        <input
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={typerChange}
        />
        <input
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomtext}
          onChange={typerChange}
        />
      </div>
      <button className="changeMeme" onClick={changeMeme}>
        {" "}
        CHANGE MEME
      </button>
      <div className="memeImage">
        <img src={meme.memeImg} />
        <h3 className="textMeme top ">{meme.topText}</h3>
        <h3 className="textMeme bottom">{meme.bottomText}</h3>
      </div>
    </div>
  );
}

export default Mainmeme;
