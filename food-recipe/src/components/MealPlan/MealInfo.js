import axios from 'axios';
import React, { useState, useEffect } from 'react';

function MealInfo({ meal }) {
    const [imageUrl, setImageUrl] = useState("");

    const API_KEY = "dbcfaaf522d54c2f85161adbb78e3be8";

  useEffect(() => {
    axios
        .get(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${API_KEY}&includeNutrition=false`
    )
    .then((res) => {
        console.log(res);
        setImageUrl(res.data.image);
    });
  }, [meal.id]);

  return (
    <article>
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" />
      <ul>
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>

      <a href={meal.sourceUrl}>Go to Recipe</a>
    </article>
  );
}

export default MealInfo
