import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
// import saveFromJSONToFirebase from "../../services/saveFromJSONToFirebase";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  // TODO: CARGAMOS PRODUCTOS DIRECTAMENTE DESDE EL JSON, TENEMOS QUE TENER CUIDADO PORQUE EN CADA RENDER, SE CARGAN NUEVOS PRODUCTOS. ENTONCES DEJAR COMENTADO PARA NO DUPLICAR PRODUCTOS
  // useEffect(() => {
  //   saveFromJSONToFirebase();
  // }, []);

  //Este effect se ejecuta cuando se monta el componente
  useEffect(() => {
    //Aqui estamos consumiendo multiples documentos de FIRESTORE
    const getProducts = async () => {
      let querySnapshot;
      if (categoryId) {
        const q = query(
          collection(db, "products"),
          where("category", "==", categoryId)
        );
        querySnapshot = await getDocs(q);
      } else {
        querySnapshot = await getDocs(collection(db, "products"));
      }
      const productosFirebase = [];
      querySnapshot.forEach((doc) => {
        const product = {
          id: doc.id,
          ...doc.data(),
        };
        productosFirebase.push(product);
      });
      setProducts(productosFirebase);
    };

    getProducts();

    /* fetch('https://fakestoreapi.com/products')
      .then(response => {
        console.log(response);
        return response.json()
      })
      .then(products => {
        //En base a la categoryId vamos a hacer el filtro de productos
        if (categoryId) {
          const productosFiltradosPorCategoria = products.filter(producto => producto.category === categoryId)
          console.log(productosFiltradosPorCategoria)
          setProducts(productosFiltradosPorCategoria)
        } else {
          setProducts(products)
        }
      })
      .catch((err) => {
        alert("Hubo un error")
      }); */
  }, [categoryId]);

  //!SPINNER
  // <div>
  //   <div>
  //     {Object.keys(products).length === 0 ? (
  //       <div className="d-flex justify-content-center m-4">
  //         <div className="spinner-border" role="status">
  //           <span className="visually-hidden">Loading...</span>
  //         </div>
  //       </div>
  //     ) : (
  //       <ItemList productos={products} />
  //     )}
  //   </div>
  // </div>;

  return (
    <div>
      <div>
        {Object.keys(products).length === 0 ? (
          <div className="d-flex justify-content-center m-4">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <ItemList productos={products} />
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
