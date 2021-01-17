import React from 'react';
import './TitlebarForRows.scss';
import sortIcon from '../../assets/icons/sort-24px.svg';

// Needs a boolean to show warehouse tab
// true = displays warehouse
// false = hides warehouse

function TitlebarForRows({showWarehouse}) {

  const warehouseStatus =
    (showWarehouse)
    ? "titlebar__block-left-head titlebar__block-left-head--warehouse"
    : "titlebar__block-left-head titlebar__block-left-head--warehouse titlebar__block-left-head--special-case"

  return (
    <section className="titlebar">
      <div className="titlebar__block">
        <div className="titlebar__block-left">
          <div className="titlebar__block-left-head titlebar__block-left-head--item">
            <div className="titlebar__block-left-head-title">Inventory Item</div>
            <div className="titlebar__block-left-head-sort">
              <img
                className="titlebar__block-left-head-sort-img"
                src={sortIcon} alt="Sort"
              />
            </div>
          </div>

          <div className="titlebar__block-left-head titlebar__block-left-head--status">
            <div className="titlebar__block-left-head-title">Status</div>
            <div className="titlebar__block-left-head-sort">
              <img
                className="titlebar__block-left-head-sort-img"
                src={sortIcon} alt="Sort"
              />
            </div>
          </div>

          <div className="titlebar__block-left-head titlebar__block-left-head--category">
            <div className="titlebar__block-left-head-title">Category</div>
            <div className="titlebar__block-left-head-sort">
              <img
                className="titlebar__block-left-head-sort-img"
                src={sortIcon} alt="Sort"
              />
            </div>
          </div>

          <div className="titlebar__block-left-head titlebar__block-left-head--qty">
            <div className="titlebar__block-left-head-title">Qty</div>
            <div className="titlebar__block-left-head-sort">
              <img
                className="titlebar__block-left-head-sort-img"
                src={sortIcon} alt="Sort"
              />
            </div>
          </div>

          <div className={warehouseStatus}>
            <div className="titlebar__block-left-head-title">Warehouse</div>
            <div className="titlebar__block-left-head-sort">
              <img
                className="titlebar__block-left-head-sort-img"
                src={sortIcon} alt="Sort"
              />
            </div>
          </div>
        </div>
        <div className="titlebar__block-right">Actions</div>
      </div>
    </section>
  )
}

export default TitlebarForRows
