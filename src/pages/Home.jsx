import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <Container className="Home-container shop">
      <Row>
        <div className="">
          <Product />
        </div>
      </Row>
    </Container>
  );
};

export default Home;
