import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import axios from "axios"; // Import Axios
import { baseURL } from "../utils/constant";

const Product = (props) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    axios
      .get(`${baseURL}`)
      .then((response) => {
        const data = response.data;
        console.log(data); // Log the data before handling any errors
        setProductData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // const cartItemAmount = cartItems[id];

  return (
    <Container>
      <Row className="content-row">
        {productData.map((product) => (
          <Col key={product._id} md={3} xs={12}>
            <Card
              style={{ width: "18rem" }}
              className="card text-center custom-card"
            >
              <Card.Img
                variant="top"
                src={`data:image/png;base64,${product.image}`} // Use the base64 image data
                alt="attire-pics"
                className="card-img-top img-responsive custom-img"
                height={"150px"}
              />
              <p className="top-right-tag">Free shipping</p>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>GHS {product.price}</Card.Text>

                <Button variant="primary">
                  Add to Cart {/* You can add cart functionality here */}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Product;
