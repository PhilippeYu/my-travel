import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Trav from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Trav
          destination= "Cancun"
          country= "Mexico"
          photo= "https://upload.wikimedia.org/wikipedia/commons/5/54/Imagebysafa2.jpg"
          distance = "8 192 km"
        />
        <Trav
          destination= "Venezia"
          country= "Italia"
          photo= "https://www.dltviaggi.it/immagine/27734/10%20TOUR%20VENEZIA%20-%20PADOVA.jpg"
          distance = "1 111 km"
        />
      </div>
    );
  }
}

export default App;