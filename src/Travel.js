//import React from "react";

//const Travel = props => (
//  <figure>
//    <img src={props.photo} alt={props.destination} />
//    <figcaption>
//      <blockquote>{props.destination}</blockquote>
//      <cite>{props.distance} {props.country}</cite>
//    </figcaption>
//  </figure>
//);

//export default Travel;


import React from "react";

const Travel = ({ destination, distance, country, photo }) => (
  <figure>
    <img src={photo} alt={destination} />
    <figcaption>
      <blockquote>{destination}</blockquote>
      <cite>{country}</cite>
		<cite>{distance}</cite>
   </figcaption>
  </figure>
);

export default Travel;