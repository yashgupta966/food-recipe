import React from "react";
import { v4 as uuidv4 } from "uuid";

const RecipeDetails = ({ items }) => {
  return items.map(item => {
    return (
      <ul key={uuidv4()} className="ingredient-list">
        <li className="ingredient-text">{item.text}</li>
        <li className="ingredient-weight">Weight - {item.weight}</li>
      </ul>
    );
  });
};

export default RecipeDetails;