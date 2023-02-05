import React from "react";
import Item from "../Item";

// MAPEO DE PRODUCTOS

const ItemList = ({ productos }) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 m-2 ">
      {productos.map((producto) => {
        return <Item product={producto} key={producto.id} />;
      })}
    </div>
  );
};

export default ItemList;
