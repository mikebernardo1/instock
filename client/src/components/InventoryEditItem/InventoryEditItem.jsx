import React from 'react';
// import axios from 'axios';
import './InventoryEditItem.scss';
import arrowBack from '../../assets/icons/arrow_back-24px.svg';

class InventoryEditItem extends React.Component{

  itemToEdit = this.props.match.params.id

  state = {
    id: "9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3",
    warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
    warehouseName: "Manhattan",
    itemName: "Television",
    description: "This 50 inch, 4K LED TV provides a crystal-clear picture and vivid colors.",
    category: "Electronics",
    status: "In Stock",
    quantity: 500
    }
  
  
  itemStock = this.state.status === "In Stock" ? true : false;
  
  // submitHandler = (e) =>{
  //   e.preventDefault();
  //   const upload = {
  //     warehouseName: e.target.warehouseName.value,
  //     itemName: e.target.itemName.value,
  //     description: e.target.description.value,
  //     category: e.target.category.value,
  //     status: e.target.status.value,
  //     quantity: e.target.quantity.value,
  //   }
  
  //   axios
  //   .post('http://localhost:8080/inventory', upload)
  // }

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
    this.setState({
      warehouse: event.target.value
    }, this.setButtonStatus()) // setting button status when required fields have data
  }

  // Function to set the state of 'setButtonStatus'
  // thereby enabling / disabling the Publish button
  setButtonStatus = () => {
    // if(this.state.title !== '' && this.state.description !== '') {
    //   this.setState({
    //     buttonDisabled: false
    //   })
    // }
  }

  render(){
    console.log(this.itemToEdit)
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
                    <option
                      className="inventoryEditItem__div2-block-option"
                      value="Electronics">Electronics
                    </option>
                    <option
                      className="inventoryEditItem__div2-block-option"
                      value="Tools">Tools
                    </option>
                    <option
                      className="inventoryEditItem__div2-block-option"
                      value="Clothing">Clothing
                    </option>
                    <option
                      className="inventoryEditItem__div2-block-option"
                      value="Sports">Sports
                    </option>
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
                        value="In Stock">
                      </input>
                      <label className="inventoryEditItem__div3-block-buttons-div1-label">In Stock</label>
                    </div>
                    <div className="inventoryEditItem__div3-block-buttons-div2">
                      <input
                        type="radio"
                        className="inventoryEditItem__div3-block-buttons-radio"
                        name="status"
                        value="Out of Stock">
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
                  <select className="inventoryEditItem__div2-block-select" name="warehouseName">
                    <option
                      disabled
                      defaultValue
                      className="inventoryEditItem__div2-block-option"
                      >Please select
                    </option>
                    <option className="inventoryEditItem__div2-block-option">King West</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="inventoryEditItem__div4">
          <button
            className="inventoryEditItem__div4-button inventoryEditItem__div4-button--white"
            type="submit">Cancel
          </button>
          <button
            className="inventoryEditItem__div4-button inventoryEditItem__div4-button--blue"
            type="submit"
            form="form">Save
          </button>
        </div>
      </div>
  )}
}

export default InventoryEditItem;