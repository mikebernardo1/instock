import React from 'react';
import axios from 'axios';
import './InventoryEditItem.scss';
import arrowBack from '../../assets/icons/arrow_back-24px.svg';
const apiUrlWarehouse = 'http://localhost:8080/warehouse';
const apiUrlItemDetails = 'http://localhost:8080/inventory/item/';

class InventoryEditItem extends React.Component{

  itemToEdit = this.props.match.params.id
  categoryArray = ['Electronics', 'Gear', 'Apparel', 'Accessories', 'Health']

  state = {
    warehouses: [],
    id: "",
    warehouseID: "",
    warehouseName: "",
    itemName: "",
    description: "",
    category: "",
    status: "",
    quantity: ''
  }
  
  itemStock = this.state.status === "In Stock" ? true : false;

  componentDidMount(){
    axios.all([
      axios.get(apiUrlWarehouse),
      axios.get(`${apiUrlItemDetails}${this.itemToEdit}`)
    ])
    .then((res) => {
      this.setState({
        warehouses: res[0].data,

        id: res[1].data.id,
        warehouseID: res[1].data.warehouseID,
        warehouseName: res[1].data.warehouseName,
        itemName: res[1].data.itemName,
        description: res[1].data.description,
        category: res[1].data.category,
        status: res[1].data.status,
        quantity: res[1].data.quantity,

        buttonDisabled: true
      });
    })
    .catch((err) => console.log(err));
  }
  
  submitHandler = (e) => {
    e.preventDefault();
    const updatedItem = {
      id: this.state.id,
      warehouseID: this.state.warehouseID,
      warehouseName: e.target.warehouseName.value,
      itemName: e.target.itemName.value,
      description: e.target.description.value,
      category: e.target.category.value,
      status: e.target.status.value,
      quantity: e.target.quantity.value
    }
    axios
      .put(`${apiUrlItemDetails}${this.itemToEdit}`, updatedItem)
      .then(res => this.props.history.push(`/inventory/item/${this.itemToEdit}`))
      .catch(err => console.log(err))
  }

  // Functions to update states & hence the value in fields
  updateName = event => {
    this.setState({
      itemName: event.target.value
    }, this.setButtonStatus()) // setting button status when required fields have data
  }

  updateDesc = event => {
    this.setState({
      description: event.target.value
    }, this.setButtonStatus()) // setting button status when required fields have data
  }

  updateCategory = event => {
    this.setState({
      category: event.target.value
    }, this.setButtonStatus()) // setting button status when required fields have data
  }

  updateStatus = event => {
    this.setState({
      status: event.target.value
    }, this.setButtonStatus()) // setting button status when required fields have data
  }

  updateQty = event => {
    this.setState({
      quantity: event.target.value
    }, this.setButtonStatus()) // setting button status when required fields have data
  }

  updateWarehouse = event => {
    let currentWarehouseName = event.target.value;
    let currentWarehouseItem = this.state.warehouses.find(warehouse => currentWarehouseName === warehouse.name);
    this.setState({
      warehouseName: currentWarehouseName,
      warehouseID: currentWarehouseItem.id
    }, this.setButtonStatus()) // setting button status when required fields have data
  }

  updateStock = event => {
    this.setState({
      status: event.target.value
    }, this.setButtonStatus()) // setting button status when required fields have data
  }

  // Function to set the state of 'setButtonStatus'
  // thereby enabling / disabling the Save button
  setButtonStatus = () => {
    if(
      this.state.warehouseName !== '' &&
      this.state.itemName !== '' &&
      this.state.description !== '' &&
      this.state.category !== '' &&
      this.state.status !== '' &&
      this.state.quantity !== ''
    ) {
      this.setState({
        buttonDisabled: false
      })
    }
  }

  // Handle Cancel button
  handleCancelButton = () => {
    this.props.history.push(`/inventory/item/${this.itemToEdit}`)
  }

  render() {
    return (
      <div className="inventoryEditItem">
        <div className="inventoryEditItem__div1">
          <img src={arrowBack}
            alt="arrow back"
            className="inventoryEditItem__div1-arrow">
          </img>
          <h1 className="inventoryEditItem__div1-title">Edit Inventory Item</h1>
        </div>
        <form
          className="inventoryEditItem__form"
          onSubmit={this.submitHandler}
          name="id"
          id="form"
        >
          <div className="inventoryEditItem__mainContent">
            <div className="inventoryEditItem__div2">
              <h2 className="inventoryEditItem__div2-header">Item Details</h2>
              <div className="inventoryEditItem__div2-block">
                <h3 className="inventoryEditItem__div2-block-categoryTitle">Item Name</h3>
                <input
                  type="text"
                  placeholder="Item Name"
                  className="inventoryEditItem__div2-block-textField1"
                  name="itemName"
                  value={this.state.itemName}
                  onChange={this.updateName}>
                </input>
              </div>
              <div className="inventoryEditItem__div2-block">
                <h3 className="inventoryEditItem__div2-block-categoryTitle">Description</h3>
                <textarea
                  placeholder="Please enter a brief descrption"
                  className="inventoryEditItem__div2-block-textField2"
                  name="description"
                  value={this.state.description}
                  onChange={this.updateDesc}>
                </textarea>
              </div>
              <div className="inventoryEditItem__div2-block">
                <h3 className="inventoryEditItem__div2-block-categoryTitle">Category</h3>
                <select
                  className="inventoryEditItem__div2-block-select"
                  name="category"
                  value={this.state.category}
                  onChange={this.updateCategory}
                  >
                    {this.categoryArray.map((category, i) =>
                      <option
                        key={i}
                        className="inventoryEditItem__div2-block-option">{category}
                      </option>
                    )}
                </select>
              </div>
            </div>
            <div className="inventoryEditItem__div3">
              <h2 className="inventoryEditItem__div3-header">Item Availability</h2>
              <div className="inventoryEditItem__div3-mainSection">
                <div className="inventoryEditItem__div3-block inventoryEditItem__div3-block-buttons">
                  <h3 className="inventoryEditItem__div3-block-categoryTitle">Status</h3>
                  <div className="inventoryEditItem__div3-block-buttons--flex">
                    <div className="inventoryEditItem__div3-block-buttons-div1">
                      <input
                        type="radio"
                        className="inventoryEditItem__div3-block-buttons-radio"
                        name="status"
                        value="In Stock"
                        onChange={this.updateStatus}>
                      </input>
                      <label className="inventoryEditItem__div3-block-buttons-div1-label">In Stock</label>
                    </div>
                    <div className="inventoryEditItem__div3-block-buttons-div2">
                      <input
                        type="radio"
                        className="inventoryEditItem__div3-block-buttons-radio"
                        name="status"
                        value="Out of Stock"
                        onChange={this.updateStatus}>
                      </input>
                      <label className="inventoryEditItem__div3-block-buttons-div1-label">Out of Stock</label>
                    </div>
                  </div>
                </div>
                <div className="inventoryEditItem__div3-block">
                  <h3 className="inventoryEditItem__div3-block-categoryTitle">Quantity</h3>
                  <input
                    type="number"
                    min='0'
                    className="inventoryEditItem__div2-block-textField1 inventoryEditItem__div3-block-textField1"
                    name="quantity"
                    value={this.state.quantity}
                    onChange={this.updateQty}>
                  </input>
                </div>
                <div className="inventoryEditItem__div3-block">
                  <h3 className="inventoryEditItem__div3-block-categoryTitle">Warehouse</h3>
                  <select
                    className="inventoryEditItem__div2-block-select"
                    name="warehouseName"
                    value={this.state.warehouseName}
                    onChange={this.updateWarehouse}
                  >
                    {this.state.warehouses.map((warehouse)=>
                      <option
                        key={warehouse.id}
                        name="warehouseName"
                        className="inventoryEditItem__div2-block-option">{warehouse.name}
                      </option>
                    )}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="inventoryEditItem__div4">
          <button
            className="inventoryEditItem__div4-button inventoryEditItem__div4-button--white"
            type="button"
            onClick={this.handleCancelButton}
            >Cancel
          </button>
          <button
            className="inventoryEditItem__div4-button inventoryEditItem__div4-button--blue"
            type="submit"
            disabled={this.state.buttonDisabled}
            form="form">Save
          </button>
        </div>
      </div>
  )}
}

export default InventoryEditItem;