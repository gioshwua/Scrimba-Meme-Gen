import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Mainmeme";
function App() {
  return (
    <div className="container">
      <div className="mainContainer">
        <Header />

        <div className="MemeMain">
          <div>
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
