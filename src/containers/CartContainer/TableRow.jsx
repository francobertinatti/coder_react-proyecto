import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Shop } from "../../contexts/ShopProvider";

const TableRow = ({ product }) => {
  const { removeProduct } = useContext(Shop);
  return (
    <tr>
      <th scope="row ">{product.id}</th>
      <td
        className="d-flex align-items-center text-center"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img
          src={product.image}
          className="img-fluid img-thumbnail"
          alt="table-row"
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            margin: "0 auto",
          }}
        />
      </td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.quantity}</td>
      <td>
        <button onClick={() => removeProduct(product.id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
