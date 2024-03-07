import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-danger">
      <div className="container">
        <Link className="navbar-brand" to="/">Dragon Ball Z</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/search-characters">Buscar Personajes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/characters">Tarjetas de Personajes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/view-more">Ver Más</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search-planets">Buscar Planetas</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
