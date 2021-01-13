import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo/InStock-Logo.svg'


class Nav extends React.Component {
  
  render() {
    return (
      <header className="nav">
        <div className="nav__block">
          <NavLink className="nav__block-logo" to="/">
            <img className="nav__block-logo-img" src={Logo} alt="Instock Logo"/>
          </NavLink>
          <div className="nav__block-list">
            <NavLink 
              className="nav__block-list-item"
              activeClassName="nav__block-list-item--active"
              to="/warehouses">Warehouses
            </NavLink>
            <NavLink 
              className="nav__block-list-item"
              activeClassName="nav__block-list-item--active"
              to="/inventory">Inventory
            </NavLink>
          </div>
        </div>
      </header>
    )
  }
}

export default Nav;