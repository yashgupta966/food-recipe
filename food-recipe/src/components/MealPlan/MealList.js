import React from 'react';
import MealInfo from './MealInfo';
import './MealPlan.css';

function MealList({ mealData }) {

    return (
        <main>
            <div className="nutrients">
                <h1>Nutrients</h1>
                <ul className="nutrients-list">
                    <li className="nutrients-item">Calories: {mealData.nutrients.calories}</li>
                    <li className="nutrients-item">Carbohydrates: {mealData.nutrients.carbohydrates}</li>
                    <li className="nutrients-item">Fat: {mealData.nutrients.fat}</li>
                    <li className="nutrients-item">Protein: {mealData.nutrients.protein}</li>
                </ul>
            </div>

            <div className="d-flex flex-column flex-md-row flex-wrap">
                {mealData.meals.map((meal) => {
                    return <MealInfo key={meal.id} meal={meal} />;
                })}
            </div>
        </main>
    );
}

export default MealList
