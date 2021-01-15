import React from 'react';
import '../Warehouses/WarehouseDelete.scss';
import close from '../../assets/icons/close-24px.svg'

export default function WarehouseDelete() {
    return (
        <div className="warehouseDelete">
            <div className="warehouseDelete__div1">
                <div className="warehouseDelete__div1-close">
                    <img src ={close} className="warehouseDelete__div1-close-image" alt="close button"></img>
                </div>
                <div className="warehouseDelete__div1-block">
                    <h1 className="warehouseDelete__div1-block-title">Delete King West warehouse?</h1>
                    <p className="warehouseDelete__div1-block-text">Please confirm that you’d like to delete the King West from the list of warehouses. You won’t be able to undo this action.</p>
                </div>
            </div>
            <div className="warehouseDelete__div2">
                <button className="warehouseDelete__div2-cancel warehouseDelete__div2-button">Cancel</button>
                <button className="warehouseDelete__div2-delete warehouseDelete__div2-button">Delete</button>
            </div>
        </div>
    )
}
