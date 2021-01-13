import React from 'react'
import './InventoryItem.scss'
import BackArrow from '../../assets/icons/arrow_back-24px.svg';
import EditPencil from '../../assets/icons/edit-24px.svg';

function InventoryItem() {
  return (
    <article className="item">
      <div className="item__block">
        <header className="item__block-header">
          <img className="item__block-header-back" src={BackArrow} alt="Back"/>
          <h2 className="item__block-header-title">Television</h2>
          <img className="item__block-header-edit" src={EditPencil} alt="Edit"/>
        </header>
        <main className="item__block-main">
          <div className="item__block-main-desc">
            <div className="item__block-main-desc-top">
              <h3 className="item__block-main-desc-top-title">Item Description:</h3>
              <p className="item__block-main-desc-top-detail item__block-main-desc-top-detail--expanded">This 50", 4K LED TV provides a crystal-clear picture and vivid colors.</p>
            </div>
            <div className="item__block-main-desc-type">
              <h3 className="item__block-main-desc-type-title">Category:</h3>
              <div className="item__block-main-desc-type-text">Electronics</div>
            </div>
          </div>
          <div className="item__block-main-info">
            <div className="item__block-main-info-block">
              <h3 className="item__block-main-info-block-title">Status:</h3>
              <div
                // Class to be toggled for 'in -stock' items
                className="item__block-main-info-block-text
                          item__block-main-info-block-text--stock
                          item__block-main-info-block-text--stock-in">In Stock</div>
            </div>
            <div className="item__block-main-info-block">
              <h3 className="item__block-main-info-block-title">Quantity:</h3>
              <div className="item__block-main-info-block-text">500</div>
            </div>
            <div className="item__block-main-info-block">
              <h3 className="item__block-main-info-block-title">Warehouse:</h3>
              <div className="item__block-main-info-block-text">Manhattan</div>
            </div>
          </div>
        </main>
      </div>
    </article>
  )
}

export default InventoryItem
