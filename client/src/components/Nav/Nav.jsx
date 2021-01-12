import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo/InStock-Logo.svg'

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__block">
        <Link className="nav__block-logo" to="/">
          <img className="nav__block-logo-img" src={Logo} alt="Instock Logo"/>
        </Link>
        <div className="nav__block-list">
          <Link className="nav__block-list-item nav__block-list-item--current" to="/warehouses">Warehouses</Link>
          <Link className="nav__block-list-item" to="/inventory">Inventory</Link>
        </div>
      </div>
    </header>
  )
}
