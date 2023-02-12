import React from "react";
import NavBar from "../components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "../containers/ItemListContainer";
import ItemDetailContainer from "../containers/ItemDetailContainer";
import Cart from "../containers/CartContainer";
import CarouselFadeExample from "../components/Carrousel";

const MainNavigator = () => {
  return (
    <BrowserRouter>
      <CarouselFadeExample />
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h2>Enlace no encontrado</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainNavigator;
