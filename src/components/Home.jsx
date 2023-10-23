import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./Home.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <section className="home_section py-5">
        <div className="container d-flex flex-column align-items-center">
          <InputGroup className="mb-5 w-50">
            <Form.Control placeholder="Search..." />
            <Button className="btn btn-info" id="button-addon2">
              Search
            </Button>
          </InputGroup>
          <ProductCard></ProductCard>
        </div>
      </section>
    </>
  );
};

export default Home;
