import React from 'react';

function Navbar() {
    return (
        <div>
            {/* ---- Navbar ------ */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/">Food Recipe</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="/recipe">Find Recipe</a></li>
                            <li className="nav-item"><a className="nav-link" href="/fridge">What's in Fridge</a></li>
                            <li className="nav-item"><a className="nav-link" href="/meal-plan">Meal Plan</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* ----- end of navbar ---- */}
        </div>
    )
}

export default Navbar

