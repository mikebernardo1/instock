import React from 'react'
import { Link } from 'react-router-dom';
import WarehousesRow from '../WarehousesRow/WarehousesRow'

import './warehouses.scss';

// Import images
import searchIcon from '../../assets/icons/search-24px.svg';

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

                <Link to="/" className="warehouses__button-link"><button className="warehouses__add-new-warehouse-button">+ Add New Warehouse</button></Link>
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
