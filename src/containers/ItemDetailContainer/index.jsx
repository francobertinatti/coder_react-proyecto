import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
  // * la inicializacion en el useState la debemos inicializar con {} debido a que es un objetvo VS. cuando inicializamos ItemListContainer que se lo inicializa con [] porque es un array.

  const [detailProd, setdetailProd] = useState({});

  const { id } = useParams();

  //Este effect se ejecuta cuando se monta el componente
  useEffect(() => {
    // Vamos a obtener un unico documento de FIRESTORE
    const getProducts = async () => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const productDetail = {
          id: docSnap.id,
          ...docSnap.data(),
        };
        setdetailProd(productDetail);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };

    getProducts();

    // * Con los BACKSTICKS hacemos dinamico el fetch de busqueda
    //   fetch(`https://fakestoreapi.com/products/${id}`)
    //     .then((response) => {
    //       console.log(response);
    //       return response.json();
    //     })
    //     .then((json) => {
    //       console.log(json);
    //       setdetailProd(json);
    //     })
    //     .catch((err) => {
    //       alert("404 page not found");
    //     });
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
