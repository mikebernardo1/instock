import React from 'react';
import {Link} from 'react-router-dom';

import rightArrowIcon from '../../assets/icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';

import textShortener from '../../utilities/textShortener';

import './InventoryRow.scss';


export default function InventoryRow({inventoryItem, deleteHandler, showWarehouse}) {

  const deleteEvent = (event) => {
    console.log('%c deleteEvent called. targetID is', "color: green; font-weight: bold;");
    console.log(event.target.dataset.inventory_id);
    // Passes the ID of that data row to the delete modal popup
    deleteHandler(event.target.dataset.inventory_id);
  }

  let item = {
    "id": inventoryItem.id,
    "warehouseID": inventoryItem.warehouseID,
    "warehouseName": textShortener(inventoryItem.warehouseName, 18, 1440),
    "itemName": textShortener(inventoryItem.itemName, 18, 1440),
    "description": textShortener(inventoryItem.description, 42, 1440),
    "category": textShortener(inventoryItem.category, 20, 1440),
    "status": inventoryItem.status,
    "quantity": textShortener(inventoryItem.quantity, 5, 1440)
  }

  let itemUrl = `/inventory/item/${item.id}`;
  let editUrl = `/inventory/item/edit/${item.id}`;

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
            <img onClick={deleteEvent} data-inventory_id={item.id} className="i-item__block-actions-button" src={deleteIcon} alt="Delete"/>
            <Link className="i-item__block-actions-button" to={editUrl}><img data-inventory_id={item.id} className="i-item__block-actions-button" src={editIcon} alt="Edit"/></Link>
        </div>
      </div>
    </section>


  )
}
