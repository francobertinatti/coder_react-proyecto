// import React, { useContext } from "react";
// import { HiShoppingCart } from "react-icons/hi";
// import { Shop } from "../../contexts/ShopProvider";
// import { Link } from "react-router-dom";

// const CartWidget = () => {
//   //Vamos a consumir de context par actualizar el carrito

//   const { countCart } = useContext(Shop);

//   return (
//     <Link to="/cart">
//       <HiShoppingCart style={{ height: 35, width: 35, color: "white" }} />
//       <span style={{ height: 35, width: 35, color: "white" }}>
//         {countCart()}
//       </span>
//     </Link>
//   );
// };

// export default CartWidget;

// import React, { useContext } from "react";
// import { HiShoppingCart } from "react-icons/hi";
// import { Shop } from "../../contexts/ShopProvider";
// import { Link } from "react-router-dom";
// import { Badge } from "react-bootstrap";

// const CartWidget = () => {
//   //Vamos a consumir de context par actualizar el carrito

//   const { countCart } = useContext(Shop);

//   return (
//     <Link to="/cart">
//       <Badge variant="warning" className="m-1">
//         <HiShoppingCart style={{ height: 25, width: 25 }} />
//         <span style={{ marginLeft: "10px" }}>{countCart()}</span>
//       </Badge>
//     </Link>
//   );
// };

// export default CartWidget;

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
