import { useEffect } from "react";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";

const PlaceOrderScreen = () => {
  const { shippingAddress, paymentMethod } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate("/shipping");
    }
    if (!paymentMethod) {
      navigate("/payment");
    }
  }, [navigate, shippingAddress.address, paymentMethod]);

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}></Col>
        <Col md={4}></Col>
      </Row>
    </>
  );
};
export default PlaceOrderScreen;
