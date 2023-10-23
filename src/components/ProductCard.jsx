import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ProductCard.css";
import StarRatings from "react-star-ratings";
import Spinner from "react-bootstrap/Spinner";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const getProducts = () => {
    setSpinner(true);
    return fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setSpinner(false);
        setProducts(json);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (spinner) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div className="row">
      {products?.map((product) => {
        return (
          <div key={product.id} className=" col-3 ">
            <Card className=" pcard shadow mb-5 p-2">
              <Card.Img variant="top" src={product.image} className="pimg" />
              <Card.Body>
                <Card.Title className="fs-5 m-0 mb-2">
                  {product.title.slice(0, 15)}...
                </Card.Title>
                <Card.Text className="m-0 mb-2">
                  {product.description.slice(0, 40)}...
                </Card.Text>
                <div className="mb-2 ">
                  <StarRatings
                    rating={product.rating.rate}
                    starDimension="15px"
                    starSpacing="5px"
                    starRatedColor="red"
                  ></StarRatings>
                </div>
                <div>
                  <Link
                    className="btn btn-outline-primary mb-2 w-100"
                    variant="primary"
                    to={`/Productdetails/${product.title}/${product.id}`}
                  >
                    View Details
                  </Link>
                  <button className="btn btn-outline-success w-100 d-flex align-items-center justify-content-center ">
                    Add To Cart{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-bag-plus ms-3"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>{" "}
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
