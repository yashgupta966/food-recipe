import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import MealList from './MealList';

function MealPlan() {
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);

    const API_KEY = "dbcfaaf522d54c2f85161adbb78e3be8";

    const url = `https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY}&timeFrame=day&targetCalories=${calories}`;

    const getData= async () => {
        const res = await axios.get(url);
        console.log(res);
        setMealData(res.data);
        console.log(mealData);
};

    function onChange(e) {
        setCalories(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        getData();
    };

    return (
        <div>
            <Navbar />

            <div className="container">
                <h1 className="heading">Meal Planner</h1>

                <form onSubmit={onSubmit} className="search-form mb-5">
                    <input
                        type="text"
                        name="ingridients"
                        onChange={onChange}
                        value={calories}
                        autoComplete="off"
                        placeholder="Calories in number"
                    />
                    <button type="submit" className="btn submit-btn">Search</button>
                </form>
                
                <div >
                    {mealData && <MealList mealData={mealData} />}
                </div>
            </div>
        </div>
    );
}

export default MealPlan
