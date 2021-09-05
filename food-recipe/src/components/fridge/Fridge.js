import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import RecipeCard from './RecipeCard/RecipeCard';

function Fridge() {

    const [ingridients, setIngridients] = useState("");
    const [list, setList] = useState([]);

    const API_KEY = "dbcfaaf522d54c2f85161adbb78e3be8";

    const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingridients}&number=5&ranking=2&ignorePantry=true&apiKey=${API_KEY}`

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
            <h1>What's in your fridge</h1>

            <input type="text" name="ingridients" id="ingridients" placeholder="select the ingridents" onChange={onChange}></input>
            <button type="submit" onClick={onSubmit}>Submit</button>
            {list !== [] &&
                list.map(recipe => <RecipeCard key={uuidv4()} recipe={recipe} />)}
        </div>
    )
}

export default Fridge
