import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  // !CAPTURAMOS categorias que queremos filtrar mediante un HOOK "params"
  const { categoryId } = useParams();

  console.log(categoryId);

  //Este effect se ejecuta cuando se monta el componente
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((products) => {
        // * categoryId se va a realizar le filtro de productos por categorias
        if (categoryId) {
          const prodFiltradosPorCategorias = products.filter(
            (producto) => producto.category === categoryId
          );
          console.log(prodFiltradosPorCategorias);
          setProducts(prodFiltradosPorCategorias);
        } else {
          setProducts(products);
        }
      })
      .catch((err) => {
        alert("Hubo un error");
      });
  }, [categoryId]);

  // ! ARMAR COMPONENTE PARA INGRESAR EN EL NAVBAR
  // const handleChange = (event) => {
  //   const value = event.target.value;
  //   const productsFiltradosPorInput = products.filter((producto) =>
  //     producto.title.toLowerCase().includes(value.toLowerCase())
  //   );
  //   setProducts(productsFiltradosPorInput);
  // };

  return (
    <div>
      {/* <input onChange={handleChange} placeholder='Realice la búsqueda de productos'></input> */}
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
