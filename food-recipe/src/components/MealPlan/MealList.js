import React from 'react';
import MealInfo from './MealInfo';

function MealList({ mealData }) {

    return (
        <main>
            <section>
                <h1>Macros</h1>
                <ul>
                     <li>Calories: {mealData.nutrients.calories}</li> 
                    <li>Carbohydrates: {mealData.nutrients.carbohydrates}</li>
                    <li>Fat: {mealData.nutrients.fat}</li>
                    <li>Protein: {mealData.nutrients.protein}</li>
                </ul>
            </section>

            <section>
                {mealData.meals.map((meal) => {
                    return <MealInfo key={meal.id} meal={meal} />;
                })}
            </section>
        </main>
    );
}

export default MealList
