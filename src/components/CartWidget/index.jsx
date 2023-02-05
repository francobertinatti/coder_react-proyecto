import React, { useContext } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { Shop } from "../../contexts/ShopProvider";

const CartWidget = () => {
  //Vamos a consumir de context par actualizar el carrito

  const { products } = useContext(Shop);

  console.log(products);

  return (
    <>
      <HiShoppingCart style={{ height: 35, width: 35, color: "blue" }} />
      <span style={{ height: 35, width: 35, color: "blue" }}>
        {products.lenght}
      </span>
    </>
  );
};

export default CartWidget;
