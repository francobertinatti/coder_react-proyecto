import React from "react";
// import ItemCount from '../ItemCount';
import { Link } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";

const Item = ({ product }) => {
  return (
    <div className="text-center ">
      <div className="card h-100 ">
        <img
          src={product.image}
          className="card-img-top img-fluid max-w-100 mx-auto d-block"
          style={{ objectFit: "contain", height: "400px", maxWidth: "100%" }}
          alt={`id-${product.id}`}
        />

        <div className="card-body d-flex flex-column align-items-center text-justify">
          <h3
            className="card-title align-self-start "
            style={{ alignSelf: "flex-start" }}
          >
            {product.title}
          </h3>
        </div>
        <h5 className="card-text text-center">${product.price}</h5>

        <div className="card-footer ">
          <Link to={`/detail/${product.id}`} className="">
            <AiOutlineShopping style={{ height: 35, width: 35 }} />
          </Link>
        </div>

        {/* Offcanvas right
         */}
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          Detalle Producto
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
              {product.title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <p>{product.description}</p>
          </div>
        </div>
      </div>
      {/* Offcanvas right
       */}
    </div>
  );
};

export default Item;
