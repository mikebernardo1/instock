import React from 'react';
import axios from 'axios';
import './InventoryEditItem.scss';
import arrowBack from '../../assets/icons/arrow_back-24px.svg';

export default class InventoryEditItem extends React.Component{
  
  submitHandler = (e) =>{
    e.preventDefault();
    const upload = {
      warehouseName: e.target.warehouseName.value,
      itemName: e.target.itemName.value,
      description: e.target.description.value,
      category: e.target.category.value,
      status: e.target.status.value,
      quantity: e.target.quantity.value,
    }
  
    axios
    .post('http://localhost:8080/inventory', upload)
  }
  
  render(){
  return (
    <div className="inventoryEditItem">
      <div className="inventoryEditItem__div1">
        <img src={arrowBack} alt="arrow back" className="inventoryEditItem__div1-arrow"></img>
        <h1 className="inventoryEditItem__div1-title">Add New Inventory Item</h1>
      </div>
      <form className="inventoryEditItem__form" onSubmit={this.submitHandler} name="id" id="form">
        <div className="inventoryEditItem__mainContent">
          <div className="inventoryEditItem__div2">
            <h2 className="inventoryEditItem__div2-header">Item Details</h2>
            <div className="inventoryEditItem__div2-block">
              <h3 className="inventoryEditItem__div2-block-categoryTitle">Item Name</h3>
              <input type="text" placeholder="Item Name" className="inventoryEditItem__div2-block-textField1" name="itemName"></input>
            </div>
            <div className="inventoryEditItem__div2-block">
              <h3 className="inventoryEditItem__div2-block-categoryTitle">Description</h3>
              <textarea placeholder="Please enter a brief descrption" className="inventoryEditItem__div2-block-textField2" name="description"></textarea>
            </div>
            <div className="inventoryEditItem__div2-block">
              <h3 className="inventoryEditItem__div2-block-categoryTitle">Category</h3>
              <select className="inventoryEditItem__div2-block-select" name="category">
                <option className="inventoryEditItem__div2-block-option">Electronics</option>
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
                    <input type="radio" className="inventoryEditItem__div3-block-buttons-radio" name="status" value="In Stock"></input>
                    <label className="inventoryEditItem__div3-block-buttons-div1-label">In Stock</label>
                  </div>
                  <div className="inventoryEditItem__div3-block-buttons-div2">
                    <input type="radio" className="inventoryEditItem__div3-block-buttons-radio" name="status" value="Out of Stock"></input>
                    <label className="inventoryEditItem__div3-block-buttons-div1-label">Out of Stock</label>
                  </div>
                </div>
              </div>
              <div className="inventoryEditItem__div3-block">
                <h3 className="inventoryEditItem__div3-block-categoryTitle">Quantity</h3>
                <input type="number" min='0'className="inventoryEditItem__div2-block-textField1 inventoryEditItem__div3-block-textField1" name="quantity"></input>
              </div>
              <div className="inventoryEditItem__div3-block">
                <h3 className="inventoryEditItem__div3-block-categoryTitle">Warehouse</h3>
                <select className="inventoryEditItem__div2-block-select" name="warehouseName">
                  <option disabled defaultValue className="inventoryEditItem__div2-block-option">Please select</option>
                  <option className="inventoryEditItem__div2-block-option">King West</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="inventoryEditItem__div4">
        <button className="inventoryEditItem__div4-button inventoryEditItem__div4-button--white" type="submit">Cancel</button>
        <button className="inventoryEditItem__div4-button inventoryEditItem__div4-button--blue" type="submit" form="form">+ Add Item</button>
      </div>
    </div>
  )}
}
