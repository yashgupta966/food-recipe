import React from 'react';
import "./HomePage.css";
import Navbar from '../navbar/Navbar';

function HomePage() {
    return (
        <div className="container-fluid">
            
            <Navbar />

            {/* ---- main ----- */}

            <div className=" container d-flex flex-column flex-sm-row">

                <div className="landing">
                    <div className="mb-2">
                        <a href="/recipe" className="landing-link"><img src="/assets/images/samosa.jpg" alt="recipe" className="landing-img" /></a>
                    </div>
                    <div className="mt-3 text-center">
                        <a href="/recipe" className="landing-titles">Food Recipe</a>

                        <p className="landing-des">Food Recipe helps you to find recipes based<br />
                            on ingridents, recipe name, cusine, taste. You,<br />
                            can click on the above image or heading to go the search page.</p>
                    </div>
                </div>

                <div className="landing">
                    <div className="mb-2">
                        <a href="/fridge" className="landing-link"><img src="/assets/images/fridge.jpg" alt="fridge" className="landing-img" /></a>
                    </div>
                    <div className="mt-3">
                        <a href="/fridge" className="landing-titles">What's in Your Fridge</a>

                        <p className="landing-des">What's in your fridge helps you to find <br />the recipe based on your ingredients
                            <br />that you got. It also shows the missing<br /> items that are requried to prepare that <br />recipe.
                            You can give input  asa list of ingredients with commma <br />separated, and get the recipes you can prepare</p>
                    </div>
                </div>
                <div className="landing">
                    <div className="mb-2">
                        <a href="/meal-plan" className="landing-link"><img src="/assets/images/meal-plan.jpg" alt="meal-plan" className="landing-img" /></a>
                    </div>
                    <div className="mt-3">
                        <a href="/meal-plan" className="landing-titles">Meal Plan</a>

                        <p className="landing-des">Meal Plan is a great way to get your daily meal <br />plan or
                            weekly plan based on<br /> the number of calories you want to take. It also shows<br /> you the nutrients you gonna consume.
                            You need to give the <br />number of calories as input and it will return you meal plan.</p>
                    </div>
                </div>
            </div>
            {/* ---end of main ------- */}
        </div>
    )
}

export default HomePage
