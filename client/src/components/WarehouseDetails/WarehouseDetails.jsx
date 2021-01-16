import React, { Component } from 'react';
import Axios from 'axios';
import './WarehouseDetails.scss';
import InventoryRow from '../InventoryRow/InventoryRow';


export class WarehouseDetails extends Component {

  apiURL = 'http://localhost:8080/warehouse/';
  requestedItem = this.props.match.params.id;

  state = {
    "id": "",
    "name": "",
    "address": "",
    "city": "",
    "country": "",
    "contact": ''
  }

  componentDidMount() {
    this.apiFetchCall(this.requestedItem);
  }

  apiFetchCall = (productID) => {
    Axios
      .get(`${this.apiURL}${productID}`)
      .then((res) => {
        console.log(res.data)
        this.setState({
          "id": res.data.id,
          "name": res.data.name,
          "address": res.data.address,
          "city": res.data.city,
          "country": res.data.country,
          "contact": res.data.contact
        })
      })
      .catch((err) => console.log(err));
  }

  handleBackButton = () => {
    this.props.history.goBack();
  }

  handleEditButton = () => {
    this.props.history.push(`/warehouse/${this.requestedItem}/edit`);
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
      <article className="warehouse">
        <div className="warehouse__block">
          <header className="warehouse__block-header">
            <button
              className="warehouse__block-header-back"
              onClick={this.handleBackButton}
            >
              <svg
                className="warehouse__block-header-back-svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                  fill="#2E66E6"/>
              </svg>
            </button>
            <h2 className="warehouse__block-header-title">{this.state.name}</h2>
            <button
              className="warehouse__block-header-edit"
              onClick={this.handleEditButton}
              >
              <svg
                className="warehouse__block-header-edit-svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
                  fill="#2E66E6"/>
              </svg>
              <span className="warehouse__block-header-edit-text">Edit</span>
            </button>
          </header>
          <main className="warehouse__block-main">
            <div className="warehouse__block-main-address">
              <div className="warehouse__block-main-address-block">
                <h3 className="warehouse__block-main-address-block-title">Warehouse Address:</h3>
                <address className="warehouse__block-main-address-block-street">
                  {this.state.address}<br />
                  {this.state.city}, {this.state.country}
                </address>

              </div>
            </div>
            <div className="warehouse__block-main-contact">
              <div className="warehouse__block-main-contact-name">
                <h3 className="warehouse__block-main-contact-name-title">Contact Name:</h3>
                <div className="warehouse__block-main-contact-name-detail">
                  <p>{this.state.contact.name}</p>
                  <p>{this.state.contact.position}</p>
                </div>
              </div>
              <div className="warehouse__block-main-contact-info">
                <h3 className="warehouse__block-main-contact-info-title">Contact Information:</h3>
                <address className="warehouse__block-main-contact-info-details">
                  <a href="mailto:jim@rock.com">jim@rock.com</a><br />
                  <a href="tel:+13115552368">(311) 555-2368</a>
                </address>
              </div>
            </div>
          </main>
          {/* Needs a false for disabling the warehouse column
              from the inventory row component */}
          <div className="inventory-component--warehouse">
            <InventoryRow
              inventoryItem={item1}
              showWarehouse={false}
            />
          </div>
          <div className="inventory-component--warehouse">
            <InventoryRow
              inventoryItem={item2}
              showWarehouse={false}
            />
          </div>
        </div>
      </article>
    )
  }
}

export default WarehouseDetails