import React from "react";
import gif from "../img/cocktail-loading.gif";

function Loading() {
  return (
    <div className="loading">
      <img src={gif} alt="Loading..." />
    </div>
  );
}

export default Loading;
