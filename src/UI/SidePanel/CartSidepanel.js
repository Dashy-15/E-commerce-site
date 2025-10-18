import { Col, Offcanvas, Row, Form, Button } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../../Global/cart-context";
import "./CartSidepanel.css";

function CartSidepanel(props) {
  const sideCtx = useContext(CartContext);

  const removeItemFromCart = (id) => {
    sideCtx.removeItem(id);
  };

  return (
    <Offcanvas
      show={props.show}
      onHide={props.handleClose}
      placement="end"
      backdrop={true}
      style={{
        width: "450px",
        marginTop: "56px",
        height: "calc(100% - 56px)",
        borderLeft: "2px solid #07172eff",
        padding: "10px",
      }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>

      {/* Header */}
      <Row className="fw-bold text-center mb-2 border-bottom pb-2">
        <Col xs={3}>ITEM</Col>
        <Col xs={5} style={{paddingLeft: "40px"}}>PRICE</Col>
        <Col xs={4}>QUANTITY</Col>
      </Row>

      {/* Items */}
      {sideCtx.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {sideCtx.items.map((item) => (
            <Row
              key={item.id}
              className="align-items-center text-center mb-2"
              style={{
                minHeight: "80px",
                paddingBottom: "10px",
                borderBottom: "1px solid #ccc", // horizontal border between rows
              }}
            >
              {/* ITEM */}
              <Col xs={4} className="d-flex align-items-center gap-2 text-center">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="cart-item-img"
                />
                <div style={{ fontWeight: 600, textAlign: "left" }}>
                  {item.title}
                </div>
              </Col>

              {/* PRICE */}
              <Col xs={4} className="d-flex justify-content-center align-items-center">
                <div>${item.price.toFixed(2)}</div>
              </Col>

              {/* QUANTITY */}
              <Col xs={4} className="text-center">
                <Form.Control
                  size="sm"
                  value={item.quantity}
                  style={{
                    width: "56px",
                    textAlign: "center",
                    margin: "0 auto 6px",
                  }}
                />
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeItemFromCart(item.id)}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          ))}
        </>
      )}
    </Offcanvas>
  );
}

export default CartSidepanel;
