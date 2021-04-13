import React from "react";
import Card from "../card/card.component";
import "./card.list.style.scss";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.movie.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
