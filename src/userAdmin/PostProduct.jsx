import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { HiSaveAs } from "react-icons/hi";
import axios from "axios"; // Import Axios
import { postURL } from "../utils/constant"; // Import your API endpoint URL
import ProductsList from "../components/ProductsList";

const PostProduct = () => {
  const [productName, setProductName] = useState(""); // State for the product name
  const [productImage, setProductImage] = useState(null); // State for the product image file
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", productName);
      formData.append("image", productImage);

      // Send a POST request to your server with the form data
      await axios.post(`${postURL}`, formData);

      // Display a success message
      setSuccessMessage("Product posted successfully!");

      // Optionally, you can reset the form fields
      setProductName("");
      setProductImage(null);
    } catch (error) {
      console.error("Error:", error);

      // Display an error message
      setErrorMessage("Failed to post product. Please try again.");
    }
  };

  return (
    <Container>
      {successMessage && (
        <Alert
          variant="success"
          onClose={() => setSuccessMessage("")}
          dismissible
        >
          {successMessage}
        </Alert>
      )}

      {errorMessage && (
        <Alert variant="danger" onClose={() => setErrorMessage("")} dismissible>
          {errorMessage}
        </Alert>
      )}
      <Row>
      <Col md={6} xs={12}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setProductImage(e.target.files[0])}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            <HiSaveAs />
          </Button>
        </Form>
      </Col>

      <Col md={6} xs={12}>
      <h1>Product List</h1>
        <ProductsList />
      </Col>
      </Row>
    </Container>
  );
};

export default PostProduct;
