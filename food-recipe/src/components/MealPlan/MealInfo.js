import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, Table } from 'reactstrap';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

function MealInfo({ meal }) {
    const [data, setData] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const API_KEY = "dbcfaaf522d54c2f85161adbb78e3be8";

    useEffect(() => {
        axios
            .get(
                `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${API_KEY}&includeNutrition=false`
            )
            .then((res) => {
                // console.log(res);
                setImageUrl(res.data.image);
                console.log(imageUrl);
                setData(res.data);
                console.log(data);
            });
    }, [meal.id]);

    return (
        <div className="recipe">
            <Card style={{ width: "20rem" }}>
                <CardBody>
                    <CardTitle tag="h5">{meal.title}</CardTitle>
                </CardBody>
                <img width="100%" height="300rem" src={data.image} alt={data.title} />
                <CardBody>
                    <CardText className="card-text">Preparation time: {data.readyInMinutes} minutes</CardText>
                    <CardText className="card-text">Servings : {data.servings}</CardText>
                    <CardText className="card-text"></CardText>
                    <button className="btn btn-dark" type="button" onClick={() => setModal(!modal)}>Get Info</button>

                    <div >
                        <Modal isOpen={modal} toggle={toggle} className="pop-up">

                            <ModalHeader className="label">{data.title}</ModalHeader>

                            <img width="100%" src={data.image} alt={data.title} className="pop-up-img" />

                            <ModalBody className="">
                                <button className="url-btn"><a href={data.url}>Get More Info</a></button>
                                <div className="des">Time to Prepare : {data.readyInMinutes}</div>
                                <div className="des">Servings : {data.servings}</div>
                                <div className="des">Veg : {data.vegetarian ? "YES" : "NO"}</div>
                            </ModalBody>
                            <ModalBody>
                                <h4 className="head">INGREDIENTS</h4>

                                <Table striped dark>
                                    <tbody>
                                        {data.extendedIngredients.map(ingredient =>
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
}

export default MealInfo;