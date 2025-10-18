import { Button } from "react-bootstrap";
import "./CartButton.css";
import { useContext } from "react";
import CartContext from "../../Global/cart-context";

function CartButton(props) {
  const ctx = useContext(CartContext);

  // Calculate total number of items in cart
  const numberOfCartItems = ctx.items.reduce((currNum, item) => {
    return currNum + item.quantity;
  }, 0);

  return (
    <div className="cart-button-container">
      <Button variant="outline-info" className="cart-btn" onClick={props.onClick}>
        Cart
        <span className="cart-count">{numberOfCartItems}</span>
      </Button>
    </div>
  );
}

export default CartButton;
