import React from 'react';
import {Link} from 'react-router-dom';
import rightArrowIcon from '../../assets/icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import './InventoryRow.scss';

// Needs inventory item object
// Needs a boolean to show warehouse
// true = displays warehouse
// false = hides warehouse

function InventoryRow({inventoryItem, showWarehouse}) {
  
  let item = {
    "id": inventoryItem.id,
    "warehouseID": inventoryItem.warehouseID,
    "warehouseName": inventoryItem.warehouseName,
    "itemName": inventoryItem.itemName,
    "description": inventoryItem.description,
    "category": inventoryItem.category,
    "status": inventoryItem.status,
    "quantity": inventoryItem.quantity
  }

  let editHandler = () => console.log("Edit button clicked.")
  let deleteHandler = () => console.log("Delete button clicked.")


  let itemUrl = `/inventory/${item.id}`

  const stockStatus =
      (item.status === 'Out of Stock')
      ? "i-item__block-info-piece-value i-item__block-info-piece-value--status i-item__block-info-piece-value--stock"
      : "i-item__block-info-piece-value i-item__block-info-piece-value--status i-item__block-info-piece-value--stock i-item__block-info-piece-value--stock-in";
  
  const warehouseStatus =
      (showWarehouse)
      ? "i-item__block-info-piece i-item__block-info-piece--warehouse"
      : "i-item__block-info-piece i-item__block-info-piece--warehouse i-item__block-info-piece--special-case"
  
  return (
    <section className="i-item">
      <div className="i-item__block">
        <div className="i-item__block-info">
          <div className="i-item__block-info-piece i-item__block-info-piece--item">
            <h3 className="i-item__block-info-piece-title">Inventory Item</h3>
            <Link
              to={itemUrl}
              className="i-item__block-info-piece-link"
              >
              <h4 className="i-item__block-info-piece-link-text">{item.itemName}</h4>
              <img className="i-item__block-info-piece-link-icon" src={rightArrowIcon} alt="right arrow"/>
            </Link>
          </div>

          <div className="i-item__block-info-piece i-item__block-info-piece--status">
            <h3 className="i-item__block-info-piece-title">Status</h3>
            <div className={stockStatus}>{item.status}</div>
          </div>

          <div className="i-item__block-info-piece i-item__block-info-piece--category">
            <h3 className="i-item__block-info-piece-title">Category</h3>
            <div className="i-item__block-info-piece-value
                          i-item__block-info-piece-value--category">{item.category}</div>
          </div>

          <div className="i-item__block-info-piece i-item__block-info-piece--qty">
            <h3 className="i-item__block-info-piece-title">Qty</h3>
            <div
              className="i-item__block-info-piece-value
                      i-item__block-info-piece-value--qty">{item.quantity}
            </div>
          </div>

          <div 
            className={warehouseStatus}>
            <h3 className="i-item__block-info-piece-title">Warehouse</h3>
            <div className="i-item__block-info-piece-value
                          i-item__block-info-piece-value--warehouse">{item.warehouseName}</div>
          </div>
        </div>
        <div className="i-item__block-actions">
          <button
            className="i-item__block-actions-button"
            onClick={deleteHandler}>
            <img className="i-item__block-actions-button-icon" src={deleteIcon} alt="Delete"/>
          </button>
          <button
            className="i-item__block-actions-button"
            onClick={editHandler}>
            <img className="i-item__block-actions-button-icon" src={editIcon} alt="Edit"/>
          </button>
        </div>
      </div>
    </section>
  )
}

export default InventoryRow
