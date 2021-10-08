import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

function SingleCocktail() {
  const { id } = useParams();
  const { loading, fetchSingleCocktail, singleCocktail } = useGlobalContext();

  let { name, image, category, glass, ingredients, instruction } =
    singleCocktail;

  useEffect(() => {
    fetchSingleCocktail(id);
  }, []);

  if (!ingredients) {
    ingredients = ["No ingredients Found!"];
  }

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="single-cocktail">
      <div className="single-cocktail-head">
        <img src={image} alt={name} />
        <Link to="/">
          <BiArrowBack className="single-cocktail-back" />
        </Link>
      </div>
      <div className="single-cocktail-body">
        <table>
          <th colSpan="2">
            <td>
              <h1>{name}</h1>
            </td>
          </th>
          <tr>
            <td>Category</td>
            <td className="column">:</td>
            <td>{category}</td>
          </tr>
          <tr>
            <td>Glass</td>
            <td className="column">:</td>
            <td>{glass}</td>
          </tr>
          <tr>
            <td>Instructions</td>
            <td className="column">:</td>
            <td>{instruction}</td>
          </tr>

          <tr>
            <td>Ingredients</td>
            <td className="column">:</td>
            <td>
              {ingredients.map((item) => (
                <p>{item}</p>
              ))}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default SingleCocktail;
