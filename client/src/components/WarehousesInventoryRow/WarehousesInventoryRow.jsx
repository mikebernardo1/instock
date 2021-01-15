import React from 'react';
import rightArrowIcon from '../../assets/icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';

import './WarehousesInventoryRow.scss';


export default function WarehousesInventoryRow() {

  return (
    <section className="wi-item">
      <div className="wi-item__block">
        <div className="wi-item__block-info">
          <div className="wi-item__block-info-piece">
            <h3 className="wi-item__block-info-piece-title">Inventory Item</h3>
            <button className="wi-item__block-info-piece-link">
              <h4 className="wi-item__block-info-piece-link-text">Television</h4>
              <img className="wi-item__block-info-piece-link-icon" src={rightArrowIcon} alt="right arrow"/>
            </button>
          </div>

          <div className="wi-item__block-info-piece">
            <h3 className="wi-item__block-info-piece-title">Status</h3>
            <div className="wi-item__block-info-piece-value
                        wi-item__block-info-piece-value--stock
                        wi-item__block-info-piece-value--stock-in">In Stock</div>
          </div>

          <div className="wi-item__block-info-piece">
            <h3 className="wi-item__block-info-piece-title">Category</h3>
            <div className="wi-item__block-info-piece-value">Electronics</div>
          </div>

          <div className="wi-item__block-info-piece">
            <h3 className="wi-item__block-info-piece-title">Qty</h3>
            <div
              className="wi-item__block-info-piece-value">500
            </div>
          </div>

          <div className="wi-item__block-info-piece">
            <h3 className="wi-item__block-info-piece-title">Warehouse</h3>
            <div className="wi-item__block-info-piece-value">Manhattan</div>
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
