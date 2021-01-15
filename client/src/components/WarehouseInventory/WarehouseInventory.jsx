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
    let item1 = {
      "id": "9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3",
      "warehouseID": "2922c286-16cd-4d43-ab98-c79f698aeab0",
      "warehouseName": "Manhattan",
      "itemName": "Television",
      "description": "This 50\", 4K LED TV provides a crystal-clear picture and vivid colors.",
      "category": "Electronics",
      "status": "In Stock",
      "quantity": 500
    }
    let item2 = {
      "id": "4dd464d6-90b8-4330-91e0-bd1217811bd9",
      "warehouseID": "2922c286-16cd-4d43-ab98-c79f698aeab0",
      "warehouseName": "Wonderland",
      "itemName": "Tent",
      "description": "Perfect for spring or summer camping, this 1-person tent is easy to pack and has the option to become modular when used with other products.",
      "category": "Gear",
      "status": "Out of Stock",
      "quantity": 800
    }
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

        <WarehousesInventoryRow item={item1}/>
        <WarehousesInventoryRow item={item2}/>
      </section>
    )
  }
}

export default WarehouseInventory