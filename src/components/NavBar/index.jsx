import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark  ">
      <div className="container-fluid ">
        <Link className="navbar-brand " to="/">
          LA ARGENTINA
        </Link>
        <button
          /* BOTON HAMBURGUESA */
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/category/electronics"
                className="nav-link active"
                aria-current="page"
              >
                Electronics
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/category/jewelery"
                className="nav-link active"
                aria-current="page"
              >
                Jewelery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/category/men's clothing"
                className="nav-link active"
                aria-current="page"
              >
                Men's clothing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/category/women's clothing"
                className="nav-link active"
                aria-current="page"
              >
                Women's clothing
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link className='nav-link' to=' '>
                Link
              </Link>
            </li> */}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder=""
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              BUSCAR
            </button>
          </form>
        </div>

        <div>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
