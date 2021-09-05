import React from 'react';
import "./HomePage.css";

function HomePage() {
    return (
        <div className="container">

            {/* ---- Navbar ------ */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                
                    <a className="navbar-brand" href="/">Food Recipe</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="/main">Find Recipe</a></li>
                            <li className="nav-item"><a className="nav-link" href="/fridge">What's in Fridge</a></li>
                            <li className="nav-item"><a className="nav-link" href="/meal-plan">Meal Plan</a></li>
                        </ul>
                    </div>
                
            </nav>
            {/* ----- end of navbar ---- */}

            {/* ---- main ----- */}
            
            <div className="d-flex flex-column flex-sm-row">

                <div className="landing">
                    <a href="/recipe" className="landing-link"><img src="/assets/images/samosa.jpg" alt="recipe" className="landing-img"/></a>

                    <a href="/recipe" className="landing-titles">Food Recipe</a>

                    <p className="landing-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <br/>
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                </div>

                <div className="landing">
                <a href="/fridge" className="landing-link"><img src="/assets/images/fridge.jpg" alt="recipe" className="landing-img"/></a>

                    <a href="/fridge" className="landing-titles">What's in Your Fridge</a>

                    <p className="landing-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br/> 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in .</p>
                </div>

                <div className="landing">
                <a href="/meal-plan" className="landing-link"><img src="/assets/images/meal-plan.jpg" alt="recipe" className="landing-img"/></a>

                    <a href="/meal-plan" className="landing-titles">Meal Plan</a>

                    <p className="landing-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris <br/>
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                </div>
        
            </div>
            {/* ---end of main ------- */}
        </div>
    )
}

export default HomePage
