import React, { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { Shop } from "../../contexts/ShopProvider";

const CartWidget = () => {
  //Vamos a consumir de context par actualizar el carrito

  const { countCart } = useContext(Shop);

  return (
    <>
      <HiShoppingCart style={{ height: 35, width: 35, color: "white" }} />
      <span style={{ height: 35, width: 35, color: "white" }}>
        {countCart()}
      </span>
    </>
  );
};

export default CartWidget;
