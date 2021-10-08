import React from "react";
import test from "../img/cocktails-header.jpg";

function Cocktail({
  id,
  name,
  category,
  glass,
  image,
  ingredients,
  instruction,
}) {
  return (
    <div className="cocktail">
      <div
        className="cocktail-head"
        style={{
          width: "100%",
          height: "200px",
          backgroundImage: `linear-gradient(180deg, rgba(25,33,51, 0)30%, rgba(25,33,51, 1) 90%), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "8px 8px 0px 0px",
        }}
      >
        <h3>{name}</h3>
      </div>

      <div className="cocktail-body">
        <p className={category === "Alcoholic" ? "danger" : "eco"}>
          {/* {instruction.length > 50
            ? `${instruction.substring(0, 50)} ...`
            : instruction} */}
          {category}
        </p>
      </div>
    </div>
  );
}

export default Cocktail;
