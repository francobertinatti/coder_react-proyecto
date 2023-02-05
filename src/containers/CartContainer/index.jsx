import React, { useContext } from "react";
import { Shop } from "../../contexts/ShopProvider";
// import generateOrderObject from "../../services/generateOrderObject";
import TableRow from "./TableRow";

const Cart = () => {
  const { products } = useContext(Shop);

  const confirmarCompraCarrito = () => {
    // const order = generateOrderObject({});
  };

  return (
    <>
      <div classNameName="p-3">
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col"></th>
              <th scope="col">Producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return <TableRow key={product.id} product={product} />;
            })}
          </tbody>
        </table>
      </div>
      <button onClick={confirmarCompraCarrito}>Confirmar compra</button>
    </>
  );
};

export default Cart;
