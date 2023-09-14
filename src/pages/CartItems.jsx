import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { ShopContext } from "../context/ShopContext";
import "./Cart.css"
const CartItems = (props) => {
  const { id, attire, price, attireImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={attireImage} alt="" height="150px"/>
      <div className="description">
        <p>
          <b>{attire}</b>
        </p>
        <p>GHS {price}</p>
        <div className="countHandler">
          <Button onClick={() => removeFromCart(id)} className="CartItem-btn">-</Button>
          <input className="CartItems-input" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
          <Button onClick={() => addToCart(id)} className="CartItem-btn">+</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
