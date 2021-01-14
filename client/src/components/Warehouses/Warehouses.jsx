import React from 'react'
import { Link } from 'react-router-dom';
import WarehousesRow from '../WarehousesRow/WarehousesRow'

import './warehouses.scss';

// Import images
import searchIcon from '../../assets/icons/search-24px.svg';
import sortIcon from '../../assets/icons/sort-24px.svg';


export default function Warehouses() {
    return (
        <section className="warehouses">

            {/* Section "Header" including search field, Add New Warehouse button */}
            <div className="warehouses__header">
                <h1 className="warehouses__heading">Warehouses</h1>

                <div className="search">
                    <input type="text" className="search__input" placeholder="Search..." />
                    <img src={searchIcon} alt="Search" className="search__icon"/>     
                </div>

                {/* Add New Warehouse button */}
                <Link to="/" className="warehouses__button-link"><button className="warehouses__add-new-warehouse-button">+ Add New Warehouse</button></Link>
            </div>

            {/* Column headings with Sort buttons - Displays:None on mobile */}
            <div className="columns-header">
                <div className="columns-header__row-container cols-1-to-4">
                    <div className="columns-header__heading-container col-1">
                        <p className="columns-header__heading">WAREHOUSE</p>
                        <img src={sortIcon} alt="Sort by" className="columns-header__sort-icon"/>
                    </div>

                    <div className="columns-header__heading-container col-2">
                        <p className="columns-header__heading">ADDRESS</p>
                        <img src={sortIcon} alt="Sort by" className="columns-header__sort-icon"/>
                    </div>

                    <div className="columns-header__heading-container col-3">
                        <p className="columns-header__heading">CONTACT NAME</p>
                        <img src={sortIcon} alt="Sort by" className="columns-header__sort-icon"/>
                    </div>

                    <div className="columns-header__heading-container col-4">
                        <p className="columns-header__heading">CONTACT INFORMATION</p>
                        <img src={sortIcon} alt="Sort by" className="columns-header__sort-icon"/>
                    </div>
                </div>

                <p className="columns-header__heading col-5 columns-header__heading--last-item">ACTIONS</p>                             
            </div>

            <WarehousesRow />
            <WarehousesRow />
            <WarehousesRow />
            <WarehousesRow />
            <WarehousesRow />
            <WarehousesRow />
            <WarehousesRow />

        </section>
    )
}
