import React, { useState } from 'react';
import axios from 'axios';
import Navbar from "../navbar/Navbar";
import { v4 as uuidv4 } from "uuid";
import RecipeCard from './RecipeCard/RecipeCard';

function Fridge() {

    const [ingridients, setIngridients] = useState("");
    const [list, setList] = useState([]);

    const API_KEY = "dbcfaaf522d54c2f85161adbb78e3be8";

    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingridients}&number=10&ranking=2&ignorePantry=true&apiKey=${API_KEY}`

    const getData = async () => {
        if (ingridients !== "") {
            const res = await axios.get(url);
            console.log(res);
            setList(res.data);
            console.log(list);
        }
    };

    const onChange = e => {
        setIngridients(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        getData();
    };

    return (
        <div>
            <Navbar />
            <div className="container">


                <h1 className="heading">What's in your fridge</h1>

                <form onSubmit={onSubmit} className="search-form mb-5">
                    <input
                        type="text"
                        name="ingridients"
                        onChange={onChange}
                        value={ingridients}
                        autoComplete="off"
                        placeholder="Select the Ingredients"
                    />
                    <button type="submit" className="btn submit-btn">Search</button>
                </form>


                <div className=" d-flex flex-column flex-md-row flex-wrap">
                    {list !== [] &&
                        list.map(recipe => <RecipeCard key={uuidv4()} recipe={recipe} />)}
                </div>
            </div>
        </div>
    )
}

export default Fridge
