import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";

const ItemDetailContainer = () => {
  // * la inicializacion en el useState la debemos inicializar con {} debido a que es un objetvo VS. cuando inicializamos ItemListContainer que se lo inicializa con [] porque es un array.

  const [detailProd, setdetailProd] = useState({});

  const { id } = useParams();

  //Este effect se ejecuta cuando se monta el componente
  useEffect(() => {
    // ! obtengo un DETERMINADO producto (EN ESTE CASO EL PRODUCTO 5)
    // * Con los BACKSTICKS hacemos dinamico el fetch de busqueda
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setdetailProd(json);
      })
      .catch((err) => {
        alert("404 page not found");
      });
  }, [id]);

  return (
    <div>
      {Object.keys(detailProd).length === 0 ? (
        <div className="d-flex justify-content-center m-4">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <ItemDetail detail={detailProd} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
