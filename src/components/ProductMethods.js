import React, { useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import { CiEdit } from "react-icons/ci";
import { MdAutoDelete } from "react-icons/md";
import { FaWindowClose, FaSave } from "react-icons/fa";

const ProductMethods = ({ product, onDelete, onUpdate }) => {
  const [showModal, setShowModal] = useState(false);

  const handleEdit = () => {
    setShowModal(true);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      onDelete(product._id);
    }
  };

  return (
    <Container>
      <Row>
        <Col md="12">
          <Card body>
            {product.name}
            <Button style={{ marginRight: "15px" }} onClick={handleEdit}>
              <CiEdit />
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              <MdAutoDelete />
            </Button>
          </Card>{" "}
        </Col>
      </Row>

      {/* Modal for editing */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Place your edit form or input fields here */}
          {/* Example: */}
          <input type="text" defaultValue={product.name} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            <FaWindowClose />
          </Button>
          <Button variant="primary" onClick={onUpdate}>
            <FaSave />
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProductMethods;
