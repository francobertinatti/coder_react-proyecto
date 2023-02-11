import React, { useContext, useState } from "react";
import TableRow from "./TableRow";
import Swal from "sweetalert2";
import generateOrderObject from "../../services/generateOrderObject";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Shop } from "../../contexts/ShopProvider";
import FormComp from "../../components/Form";

const Cart = () => {
  const { products, total, cleanCart } = useContext(Shop);

  const [formVis, setFormVis] = useState(false);

  const [loader, setLoader] = useState(false);

  console.log(products);

  const confirmPurchase = async (dataDelFormulario) => {
    console.log(dataDelFormulario);
    const { nombre, email, phone: telefono } = dataDelFormulario;

    try {
      setLoader(true);

      const order = generateOrderObject({
        nombre,
        email,
        telefono,
        cart: products,
        total: total(),
      });

      // setFormVis(true);
      console.log(order);

      //Almacenar la order en firebase y con el ID autogenerado por firebase, mostramos un alert de confirmación de compra.

      //! Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "orders"), order);
      cleanCart();
      //TODO: actualizar el stock de los productos en la db - updateDoc
      for (const productCart of products) {
        const productRef = doc(db, "products", productCart.id);

        await updateDoc(productRef, {
          stock: productCart.stock - productCart.quantity,
        });
      }

      // alert("Orden confirmada con ID: " + docRef.id);
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Orden confirmada con ID: " + docRef.id,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
      setFormVis(false);
    }
  };

  return (
    <>
      <div class="d-flex flex-column align-items-center">
        {products.length !== 0 ? (
          <>
            <table class="table table-hover w-75">
              <thead class="thead-dark">
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
            <div class="d-flex justify-content-center mt-3">
              {loader ? (
                <div className="d-flex justify-content-center m-4">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <button
                  class="btn btn-primary mb-3"
                  onClick={() => setFormVis(true)}
                >
                  Confirmar compra
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <h1 class="text-center mt-5">No hay productos en el carrito.</h1>
            <div class="d-flex justify-content-center mt-3">
              <button class="btn btn-primary mb-3">
                <Link class="text-reset text-decoration-none" to="/">
                  Home
                </Link>
              </button>
            </div>
          </>
        )}
      </div>

      {formVis ? (
        <FormComp
          confirmPurchase={confirmPurchase}
          formVis={formVis}
          setFormVis={setFormVis}
        />
      ) : null}
    </>
  );
};

export default Cart;
