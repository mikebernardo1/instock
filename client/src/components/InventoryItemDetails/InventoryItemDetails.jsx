import React, { Component } from 'react';
import Axios from 'axios';
import './InventoryItemDetails.scss';


export class InventoryItemDetails extends Component {

  apiURL = 'http://localhost:8080/inventory/'

  state = {
    item: '',
    description: '',
    category: '',
    status: '',
    quantity: '',
    warehouse: ''
  }

  componentDidMount() {
    let requestedItem = this.props.match.params.id;
    this.apiFetchCall(requestedItem);
  }

  apiFetchCall = (productID) => {
    Axios
      .get(`${this.apiURL}${productID}`)
      .then((res) => {
        this.setState({
          item: res.data.itemName,
          description: res.data.description,
          category: res.data.category,
          status: res.data.status,
          quantity: res.data.quantity,
          warehouse: res.data.warehouseName
        })
      })
      .catch((err) => console.log(err));
  }

  handleBackButton = () => {
    this.props.history.goBack();
  }

  render() {
    // Function to toggle class for stock status
    // inorder to apply custom styling depending on the stock status
    const stockStatus =
      (this.state.status === 'Out of Stock')
      ? "item__block-main-info-block-text item__block-main-info-block-text--stock"
      : "item__block-main-info-block-text item__block-main-info-block-text--stock item__block-main-info-block-text--stock-in";
    
    return (
      <article className="item">
        <div className="item__block">
          <header className="item__block-header">
            <button
              className="item__block-header-back"
              onClick={this.handleBackButton}
            >
              <svg
                className="item__block-header-back-svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                  fill="#2E66E6"/>
              </svg>
            </button>
            <h2 className="item__block-header-title">{this.state.item}</h2>
            <div className="item__block-header-edit">
              <svg
                className="item__block-header-edit-svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
                  fill="#2E66E6"/>
              </svg>
              <span className="item__block-header-edit-text">Edit</span>
            </div>
          </header>
          <main className="item__block-main">
            <div className="item__block-main-desc">
              <div className="item__block-main-desc-top">
                <h3 className="item__block-main-desc-top-title">Item Description:</h3>
                <p className="item__block-main-desc-top-detail item__block-main-desc-top-detail--para">{this.state.description}</p>
              </div>
              <div className="item__block-main-desc-type">
                <h3 className="item__block-main-desc-type-title">Category:</h3>
                <div className="item__block-main-desc-type-text">{this.state.category}</div>
              </div>
            </div>
            <div className="item__block-main-info">
              <div className="item__block-main-info-block">
                <h3 className="item__block-main-info-block-title">Status:</h3>
                <div className={stockStatus}>{this.state.status}</div>
              </div>
              <div className="item__block-main-info-block">
                <h3 className="item__block-main-info-block-title">Quantity:</h3>
                <div className="item__block-main-info-block-text">{this.state.quantity}</div>
              </div>
              <div className="item__block-main-info-block">
                <h3 className="item__block-main-info-block-title">Warehouse:</h3>
                <div className="item__block-main-info-block-text">{this.state.warehouse}</div>
              </div>
            </div>
          </main>
        </div>
      </article>
    )
  }
}

export default InventoryItemDetails