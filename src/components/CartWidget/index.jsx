import React, { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { Shop } from "../../contexts/ShopProvider";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const CartWidget = () => {
  //Vamos a consumir de context par actualizar el carrito

  const { countCart } = useContext(Shop);

  return (
    <Link to="/cart">
      <Button variant="warning m-1">
        <HiShoppingCart style={{ height: 25, width: 25 }} />
        <span style={{ marginLeft: "5px" }}>{countCart()}</span>
      </Button>
    </Link>
  );
};

export default CartWidget;
