import React from "react";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

function Cocktails() {
  const { loading, db } = useGlobalContext();
  console.log("Array Length", db.length);

  if (db.length === 0) {
    return (
      <>
        <div className="no-data">
          <h1>No Cocktails Found!</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="cocktails">
        {db.map((item) => {
          return (
            <Link to={`/cocktail/${item.id}`} key={item.id}>
              <Cocktail {...item}></Cocktail>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Cocktails;
