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
                    <input type="text" placeholder="Item Name" className="inventoryAddItem__div2-block-textfield1"></input>
                </div>
                <div className="inventoryAddItem__div2-block">
                    <h3 className="inventoryAddItem__div2-block-categoryTitle">Description</h3>
                    <input type="text" placeholder="Please enter a brief descrption" className="inventoryAddItem__div2-block-textfield2"></input>
                </div>
                <div className="inventoryAddItem__div2-block">
                    <h3 className="inventoryAddItem__div2-block-categoryTitle">Category</h3>
                    <select>
                        <option>Electronics</option>
                    </select>
                </div>
            </div>
            <div className="inventoryAddItem__div3">
                <h2>Item Availability</h2>
                <div>
                    <h3>Status</h3>
                    <div>
                        <input type="radio"></input>
                        <label>In stock</label>
                        <input type="radio"></input>
                        <label>Out of stock</label>
                    </div>
                    <div>
                        <h3>Quantity</h3>
                        <input type="text"></input>
                    </div>
                    <div>
                        <h3>Warehouse</h3>
                        <select>
                            <option disabled defaultValue>Please select</option>
                        </select>
                    </div>
                    <div>
                        <button>Cancel</button>
                        <button>+ Add Item</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
