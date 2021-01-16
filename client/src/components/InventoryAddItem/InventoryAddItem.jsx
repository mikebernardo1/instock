import React from 'react';
import './InventoryAddItem.scss';
import arrowBack from '../../assets/icons/arrow_back-24px.svg';

export default function InventoryAddItem() {
    return (
        <div className="inventoryAddItem">
            <div className="inventoryAddItem__div1">
                <img src={arrowBack} alt="arrow back" className="inventoryAddItem__div1-arrow"></img>
                <h1 className="inventoryAddItem__div1-title">Add New Inventory Item</h1>
            </div>
            <div className="inventoryAddItem__div2">
                <h2 className="inventoryAddItem__div2-header">Item Details</h2>
                <div className="inventoryAddItem__div2-block">
                    <h3 className="inventoryAddItem__div2-block-categoryTitle">Item Name</h3>
                    <input type="text" placeholder="Item Name" className="inventoryAddItem__div2-block-textField1"></input>
                </div>
                <div className="inventoryAddItem__div2-block">
                    <h3 className="inventoryAddItem__div2-block-categoryTitle">Description</h3>
                    <textarea placeholder="Please enter a brief descrption" className="inventoryAddItem__div2-block-textField2"></textarea>
                </div>
                <div className="inventoryAddItem__div2-block">
                    <h3 className="inventoryAddItem__div2-block-categoryTitle">Category</h3>
                    <select>
                        <option className="inventoryAddItem__div2-block-option">Electronics</option>
                    </select>
                </div>
            </div>
            <div className="inventoryAddItem__div3">
                <h2 className="inventoryAddItem__div3-header">Item Availability</h2>
                <div className="inventoryAddItem__div3-mainSection">
                    <h3 className="inventoryAddItem__div3-block-categoryTitle">Status</h3>
                    <div className="inventoryAddItem__div3-block inventoryAddItem__div3-block-buttons">
                        <div className="inventoryAddItem__div3-block-buttons-div1">
                            <input type="radio" className="inventoryAddItem__div3-block-buttons-div1-radio" name="status"></input>
                            <label className="inventoryAddItem__div3-block-buttons-div1-label">In stock</label>
                        </div>
                        <div className="inventoryAddItem__div3-block-buttons-div2">
                            <input type="radio" className="inventoryAddItem__div3-block-buttons-div2-radio" name="status"></input>
                            <label className="inventoryAddItem__div3-block-buttons-div1-label">Out of stock</label>
                        </div>
                    </div>
                    <div className="inventoryAddItem__div3-block">
                        <h3 className="inventoryAddItem__div3-block-categoryTitle">Quantity</h3>
                        <input type="text" className="inventoryAddItem__div2-block-textField1"></input>
                    </div>
                    <div className="inventoryAddItem__div3-block">
                        <h3 className="inventoryAddItem__div3-block-categoryTitle">Warehouse</h3>
                        <select>
                            <option disabled defaultValue className="inventoryAddItem__div2-block-option">Please select</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="inventoryAddItem__div4">
                <button className="inventoryAddItem__div4-button inventoryAddItem__div4-button--white">Cancel</button>
                <button className="inventoryAddItem__div4-button inventoryAddItem__div4-button--blue">+ Add Item</button>
            </div>
        </div>
    )
}
