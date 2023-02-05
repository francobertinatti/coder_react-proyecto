import React, { useContext } from "react";
import { Shop } from "../../contexts/ShopProvider";
import TableRow from "./TableRow";

const Cart = () => {
  const { products } = useContext(Shop);

  return (
    <table class="table p-5">
      <thead class="table-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Image</th>
          <th scope="col">title</th>
          <th scope="col">price</th>
          <th scope="col">quantity</th>
          <th scope="col">remove</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return <TableRow key={product.id} product={product} />;
        })}
      </tbody>
    </table>
  );
};

export default Cart;
