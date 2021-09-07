import React, { useState } from "react";
import './Recipe.css';
import { Modal, ModalHeader, ModalBody, Table } from 'reactstrap';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

const Recipe = ({ recipe }) => {

  const [modal, setModal] = useState(false);
  const { label, image, url, ingredients, cuisineType, totalTime, mealType } = recipe.recipe;

  const toggle = () => setModal(!modal);

  return (
    <div className="recipe">
      <Card style={{width: "20rem"}}>
        <CardBody>
          <CardTitle tag="h5">{label}</CardTitle>
        </CardBody>
        <img width="100%" height="300rem" src={image} alt={label} />
        <CardBody>
          <CardText className="card-text">Cusine Type : {recipe.recipe.cuisineType}</CardText>
          <CardText className="card-text">Meal Type : {recipe.recipe.mealType}</CardText>
          <CardText className="card-text">Time to Prepare : {recipe.recipe.totalTime}</CardText>
          <button className="btn btn-dark" type="button" onClick={() => setModal(!modal)}>Get Info</button>

          <div >
            <Modal isOpen={modal} toggle={toggle} className="pop-up">

              <ModalHeader className="label">{label}</ModalHeader>

              <img width="100%" src={image} alt={label} className="pop-up-img" />

              <ModalBody className="">
                <button className="url-btn"><a href={url}>Get More Info</a></button>
                <div className="des">Cuisine Type : {cuisineType}</div>
                <div className="des">Meal Typr : {mealType}</div>
                <div className="des">Time to Prepare : {totalTime}</div>
              </ModalBody>
              <ModalBody>
                <h4 className="head">INGREDIENTS</h4>

                <Table striped dark>
                  <tbody>
                    {ingredients.map(ingredient =>
                      <tr><td> -) {ingredient.text}</td></tr>
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
};

export default Recipe;