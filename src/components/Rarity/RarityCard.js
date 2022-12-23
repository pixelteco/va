import React from "react";
import "./Rarity.css";

function RarityCard(props) {
  return (
    <div className="raritycard">
      <div className="icon-card mr-2">
        <figure className="image m-3">
          <img className="is-rounded" src={props.image} />
        </figure>
      </div>
      <div className="d-flex flex-column text-center justify-content-center text-white p-5">
        {/* <p className="subtitle">{props.rarity}</p>
        <p className="title-res">{props.name}</p>
        <p className="paragraph-rarity">{props.info}</p> */}
      </div>
    </div>
  );
}

export default RarityCard;
