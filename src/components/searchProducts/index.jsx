import React, { useState, useContext } from "react";
import { Shop } from "../../contexts/ShopProvider";

const SearchProducts = () => {
  const { searchProducts } = useContext(Shop);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    searchProducts(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default SearchProducts;
