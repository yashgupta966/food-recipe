import React from 'react';

function RecipeCard({ recipe }) {
    return (
        <div>
            <div className="card">
                <img src={recipe.image}  alt={recipe.title} className="card-img-top" style={{width:"18rem"}}></img>
                <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <span className="card-text">Missing Ingridients : {recipe.missedIngredientCount}</span>
                    <br />
                    <span  className="card-text">Unused Ingirdients : {recipe.unisedIngredients}</span>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard
