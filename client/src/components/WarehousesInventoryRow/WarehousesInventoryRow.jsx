import React from 'react';
import rightArrowIcon from '../../assets/icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';

import './WarehousesInventoryRow.scss';

// Needs inventory item 

export default function WarehousesInventoryRow(inventoryItem) {
  let item = {
    "id": inventoryItem.item.id,
    "warehouseID": inventoryItem.item.warehouseID,
    "warehouseName": inventoryItem.item.warehouseName,
    "itemName": inventoryItem.item.itemName,
    "description": inventoryItem.item.description,
    "category": inventoryItem.item.category,
    "status": inventoryItem.item.status,
    "quantity": inventoryItem.item.quantity
  }

  const stockStatus =
      (item.status === 'Out of Stock')
      ? "wi-item__block-info-piece-value wi-item__block-info-piece-value--status wi-item__block-info-piece-value--stock"
      : "wi-item__block-info-piece-value wi-item__block-info-piece-value--status wi-item__block-info-piece-value--stock wi-item__block-info-piece-value--stock-in";
  
  return (
    <section className="wi-item">
      <div className="wi-item__block">
        <div className="wi-item__block-info">
          <div className="wi-item__block-info-piece wi-item__block-info-piece--item">
            <h3 className="wi-item__block-info-piece-title">Inventory Item</h3>
            <button className="wi-item__block-info-piece-link">
              <h4 className="wi-item__block-info-piece-link-text">{item.itemName}</h4>
              <img className="wi-item__block-info-piece-link-icon" src={rightArrowIcon} alt="right arrow"/>
            </button>
          </div>

          <div className="wi-item__block-info-piece wi-item__block-info-piece--status">
            <h3 className="wi-item__block-info-piece-title">Status</h3>
            <div className={stockStatus}>{item.status}</div>
          </div>

          <div className="wi-item__block-info-piece wi-item__block-info-piece--category">
            <h3 className="wi-item__block-info-piece-title">Category</h3>
            <div className="wi-item__block-info-piece-value
                          wi-item__block-info-piece-value--category">{item.category}</div>
          </div>

          <div className="wi-item__block-info-piece wi-item__block-info-piece--qty">
            <h3 className="wi-item__block-info-piece-title">Qty</h3>
            <div
              className="wi-item__block-info-piece-value
                      wi-item__block-info-piece-value--qty">{item.quantity}
            </div>
          </div>

          <div className="wi-item__block-info-piece wi-item__block-info-piece--warehouse">
            <h3 className="wi-item__block-info-piece-title">Warehouse</h3>
            <div className="wi-item__block-info-piece-value
                          wi-item__block-info-piece-value--warehouse">{item.warehouseName}</div>
          </div>
        </div>
        <div className="wi-item__block-actions">
          <button className="wi-item__block-actions-button">
            <img className="wi-item__block-actions-button-icon" src={deleteIcon} alt="Delete"/>
          </button>
          <button className="wi-item__block-actions-button">
            <img className="wi-item__block-actions-button-icon" src={editIcon} alt="Edit"/>
          </button>
        </div>
      </div>
    </section>
  )
}
