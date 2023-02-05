import React, { useState, useEffect } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((err) => {
        alert('Hubo un error al cargar los productos');
      });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value || '');
  };

  useEffect(() => {
    if (!searchTerm || !products) return;

    const filtered = products.filter((product) => {
      if (!product) return false;
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <div>
      <input type='text' placeholder='Search product by title' onChange={handleSearch} />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
