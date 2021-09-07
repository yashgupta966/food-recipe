import React, { useState } from 'react';
import './RecipeCard.css';
import { Modal, ModalHeader, ModalBody, Table } from 'reactstrap';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import axios from 'axios';

function RecipeCard({ recipe }) {

    const API_KEY = "dbcfaaf522d54c2f85161adbb78e3be8";
    const [list, setList] = useState({});
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const getData = async () => {
        const res = await axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${API_KEY}&includeNutrition=false`);
        console.log(res);
        setList(res.data);
        console.log(list);
    };

    return (
        <div className="recipe">
            <Card style={{width:"20rem"}}>
                <CardBody>
                    <CardTitle tag="h5">{recipe.title}</CardTitle>
                </CardBody>
                <img width="100%" height="300rem" src={recipe.image} alt={recipe.title} />
                <CardBody>
                    <CardText className="card-text">Missing Ingredients : {recipe.missedIngredientCount}</CardText>
                    <CardText className="card-text">Meal Type : {}</CardText>
                    <CardText className="card-text">Time to Prepare : {}</CardText>
                    <button className="btn btn-dark" type="button" onClick={() => {
                        setModal(!modal);
                        getData();}}>Get Info</button>

                    <div >
                        {console.log(list)}
                        <Modal isOpen={modal} toggle={toggle} className="pop-up">

                            <ModalHeader className="label">{recipe.title}</ModalHeader>

                            <img width="100%" src={recipe.image} alt={recipe.image} className="pop-up-img" />

                            <ModalBody className="">
                                <button className="url-btn"><a href={recipe.url}>Get More Info</a></button>
                                <div className="des">Time to Prepare : {list.readyInMinutes}</div>
                                <div className="des">Servings : {list.servings}</div>
                                <div className="des">Veg : {list.vegetarian?"YES":"NO"}</div>
                            </ModalBody>

                            <ModalBody>
                                <h4 className="head">USED INGREDIENTS</h4>

                                <Table striped dark>
                                    <tbody>
                                        {recipe.usedIngredients.map(ingredient =>
                                            <tr><td> -) {ingredient.original}</td></tr>
                                        )
                                        }
                                    </tbody>
                                </Table>
                            </ModalBody>

                            <ModalBody>
                                <h4 className="">MISSED INGREDIENTS : {recipe.missedIngredientCount}</h4>
                                <Table striped dark>
                                    <tbody>
                                        {recipe.missedIngredients.map(ingredient =>
                                            <tr><td> -) {ingredient.original}</td></tr>
                                        )
                                        }
                                    </tbody>
                                </Table>
                            </ModalBody>
                        </Modal>
                    </div>
                </CardBody>
            </Card>
        </div>
    );

    // return (
    //     <div>
    //         <div className="card">
    //             <img src={recipe.image}  alt={recipe.title} className="card-img-top" style={{width:"18rem"}}></img>
    //             <div className="card-body">
    //                 <h5 className="card-title">{recipe.title}</h5>
    //                 <span className="card-text">Missing Ingridients : {recipe.missedIngredientCount}</span>
    //                 <br />
    //                 <span  className="card-text">Unused Ingirdients : {recipe.unisedIngredients}</span>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default RecipeCard
