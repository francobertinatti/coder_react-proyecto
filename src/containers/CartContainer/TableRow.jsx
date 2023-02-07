import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const tableRow = (props) => {
  return (
    <tr>
      <th scope="row ">{props.product.id}</th>
      <td
        className="d-flex align-items-center text-center"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img
          src={props.product.image}
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
      <td>{props.product.title}</td>
      <td>{props.product.price}</td>
      <td>{props.product.quantity}</td>
      <td>
        <button onClick={props.removeProduct}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default tableRow;
