import React, { useContext } from "react";
import { Shop } from "../../contexts/ShopProvider";
import TableRow from "./TableRow";

const Cart = () => {
  const { products } = useContext(Shop);

  return (
    <div className="p-3">
      <table class="table table-hover">
        <thead class="table-dark">
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
  );
};

export default Cart;