import React, { useState } from 'react';
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

    function handleChange(e) {
        setCalories(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        getData();
    };

    return (
        <div>
                <input type="number"
                    placeholder="Calories (default 2000)" 
                    onChange={handleChange}
                />
                <button type="submit" onClick={onSubmit}>Get Daily Meal Plan</button>
            <div>
            {mealData && <MealList mealData={mealData} />}
            </div>
        </div>
    );
}

export default MealPlan
