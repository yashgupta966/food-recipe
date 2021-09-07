import React, { useState } from "react";
import "./Main.css";
import Navbar from "../navbar/Navbar";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Recipe from "../recipe/Recipe";

function Main() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "7b698342";
  const APP_KEY = "40a60fdf9cd88283d92c581b00cbad35";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        // return setAlert("No food with such name");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("")
    }
  };

  const onChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="heading">Food and Recipes</h1>

        <form onSubmit={onSubmit} className="search-form mb-5">
          <input
            type="text"
            name="query"
            onChange={onChange}
            value={query}
            autoComplete="off"
            placeholder="Search Food"
          />
          <button type="submit" className="btn submit-btn">Search</button>
        </form>
        <div className="recipes d-flex flex-column flex-md-row flex-wrap">
          {recipes !== [] &&
            recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
        </div>
      </div>
    </div>
  );
}

export default Main;