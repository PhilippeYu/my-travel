import React from "react";

const Trav = props => (
  <figure>
    <img src={props.photo} alt="mexico" />
    <figcaption>
      <blockquote>{props.destination}</blockquote>
      <cite>{props.distance} {props.country}</cite>
    </figcaption>
  </figure>
);

export default Trav;