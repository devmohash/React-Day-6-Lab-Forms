import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import StarRatings from "react-star-ratings";
import Spinner from "react-bootstrap/Spinner";

const ProductDetailsCard = () => {
  const [product, setProduct] = useState({});
  const [spinner, setSpinner] = useState(false);

  const params = useParams();

  const getSingleProduct = () => {
    setSpinner(true);
    return fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => {
        setSpinner(false);
        setProduct(json);
      });
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  if (spinner) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div className="col-8 d-flex align-items-center shadow rounded py-4 bg-light">
      <figure className="col-4">
        <img className="w-100 rounded" src={product.image} alt="" />
      </figure>
      <Card.Body className="col-7 px-4 text-start">
        <Card.Title className="mb-2">{product.title}</Card.Title>
        <Card.Text className="mb-2">{product.description}</Card.Text>
        <h5 className="mb-2">{product.category}</h5>
        <h5 className="mb-2">${product.price}</h5>
        <div className="d-flex align-items-center">
          <div className="me-5">
            <StarRatings
              rating={product.rating?.rate}
              starDimension="15px"
              starSpacing="5px"
              starRatedColor="red"
            ></StarRatings>
          </div>
          <button className="btn btn-success">Add To Cart</button>
        </div>
      </Card.Body>
    </div>
  );
};

export default ProductDetailsCard;
