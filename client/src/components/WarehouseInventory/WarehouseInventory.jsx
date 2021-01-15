import React, { Component } from 'react';
// import Axios from 'axios';

import searchIcon from '../../assets/icons/search-24px.svg';
// import sortIcon from '../../assets/icons/sort-24px.svg';
import WarehousesInventoryRow from '../WarehousesInventoryRow/WarehousesInventoryRow';
import { Link } from 'react-router-dom';
import './WarehouseInventory.scss'



class WarehouseInventory extends Component {

  apiURL = 'http://localhost:8080/warehouse/';
  requestedWarehouse = this.props.match.params.id;

  componentDidMount() {
    console.log(this.requestedWarehouse)
    this.apiFetchCall(this.requestedWarehouse);
  }

  apiFetchCall = (warehouseID) => {
    // Axios
      // .get(`${this.apiURL}${warehouseID}`)
      // .then((res) => {
        // console.log(res.data)
        // this.setState({
          // item: res.data.itemName,
          // description: res.data.description,
          // category: res.data.category,
          // status: res.data.status,
          // quantity: res.data.quantity,
          // warehouse: res.data.warehouseName
        // })
      // })
      // .catch((err) => console.log(err));
  }

  render() {
    return (
      <section className="inventory">

        {/* Section "Header" including search field, Add New Warehouse button */}
        <div className="inventory__header">
            <h1 className="inventory__heading">Inventory</h1>

            <div className="search">
                <input type="text" className="search__input" placeholder="Search..." />
                <img src={searchIcon} alt="Search" className="search__icon"/>     
            </div>

            {/* Add New Inventory button */}
            <Link to="/" className="inventory__button-link">
              <button className="inventory__add-new-inventory-button">+ Add New item</button>
            </Link>
        </div>

        <WarehousesInventoryRow />
        <WarehousesInventoryRow />
      </section>
    )
  }
}

export default WarehouseInventory