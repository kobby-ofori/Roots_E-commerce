import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PRODUCTS } from "./products";
import { ShopContext } from "../context/ShopContext";
import CartItems from "./CartItems";
import "./Cart.css";

import { useNavigate } from "react-router-dom";
import CheckoutModal from "../components/CheckoutModal";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  return (
    <Container className="Cart-Container">
      <h2>Your Cart</h2>
      <Row>
        <Col>
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return (
                <CartItems key={product.id} data={product} />
              ); /* Use CartItems */
            }
            return null; // Return null when the condition is not met
          })}
        </Col>
        <Col className="Cart-col2">
          {totalAmount > 0 ? (
            <div className="cart-checkout" style={{ position: "fixed"}}>
              <p>Subtotal: GHS {totalAmount}</p>
              <button onClick={() => navigate("/")} className="Cart-btn">Continue Shopping</button>
              <button onClick={handleModalShow} className="Cart-btn">Checkout</button>
            </div>
          ) : (
            <h3>Cart is Empty</h3>
          )}
        </Col>
      </Row>
      <CheckoutModal
        show={showModal}
        handleShow={handleModalShow}
        handleClose={handleModalClose}
        totalAmount={totalAmount}
      />
    </Container>
  );
};

export default Cart;
