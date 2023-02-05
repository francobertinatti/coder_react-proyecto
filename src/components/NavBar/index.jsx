import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark  ">
      <div className="container-fluid ">
        <Link className="navbar-brand " to="/">
          FRC MOTOS
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
                to="/category/motor"
                className="nav-link active"
                aria-current="page"
              >
                Motor
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/category/transmision"
                className="nav-link active"
                aria-current="page"
              >
                Transmision
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/category/suspension"
                className="nav-link active"
                aria-current="page"
              >
                Suspension
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/category/neumaticos"
                className="nav-link active"
                aria-current="page"
              >
                Neumaticos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/category/accesorios"
                className="nav-link active"
                aria-current="page"
              >
                Accesorios
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
