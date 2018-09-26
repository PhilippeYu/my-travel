import React from "react";
import Travel from "./Travel"
// src/Quotes.js
const travels = [
  {
    destination : "Cancun",
    country : "Mexico",
    photo : "https://upload.wikimedia.org/wikipedia/commons/5/54/Imagebysafa2.jpg",
    distance : "8 192 km",
  },
  {
    destination : "Cancun",
    country : "Mexico",
    photo : "https://upload.wikimedia.org/wikipedia/commons/5/54/Imagebysafa2.jpg",
    distance : "8 192 km",
  },
  {
    destination : "Cancun",
    country : "Mexico",
    photo : "https://upload.wikimedia.org/wikipedia/commons/5/54/Imagebysafa2.jpg",
    distance : "8 192 km",
  },
  {
    destination : "Cancun",
    country : "Mexico",
    photo : "https://upload.wikimedia.org/wikipedia/commons/5/54/Imagebysafa2.jpg",
    distance : "8 192 km",
  }
];

const Travels = () => (
  <div>
    {travels.map((travel, index) =>
    <Travel key={index} {...travel}/>
    )}
  </div>
);

export default Travels;