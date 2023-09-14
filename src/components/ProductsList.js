import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import { baseURL } from "../utils/constant";
import ProductMethods from "./ProductMethods";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your API
    axios
      .get(`${baseURL}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleDelete = (productId) => {
    // Send a DELETE request to your API to delete the product
    axios
      .delete(`${baseURL}:${productId}`)
      .then((response) => {
        // Remove the deleted product from the state
        setProducts(products.filter((product) => product._id !== productId));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleUpdate = () => {
    // Send a PUT request to update the product
    // Implement the update logic here
    // You can use the data from the modal form
    // Remember to close the modal after updating
  };

  return (
    <Container>
      <Row>
        {products.map((product) => (
          <ProductMethods
            key={product._id}
            product={product}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ProductsList;
