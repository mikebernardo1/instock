import React from 'react';
import './inventoryDelete.scss';
import close from '../../assets/icons/close-24px.svg'

export default function InventoryDelete() {
    return (
        <div className="inventoryDelete">
            <div className="inventoryDelete__div1">
                <div className="inventoryDelete__div1-close">
                    <img src ={close} className="inventoryDelete__div1-close-image" alt="close button"></img>
                </div>
                <div className="inventoryDelete__div1-block">
                    <h1 className="inventoryDelete__div1-block-title">Delete Television inventory item?</h1>
                    <p className="inventoryDelete__div1-block-text">Please confirm that you’d like to delete Television from the inventory list. You won’t be able to undo this action.</p>
                </div>
            </div>
            <div className="inventoryDelete__div2">
                <button className="inventoryDelete__div2-cancel inventoryDelete__div2-button">Cancel</button>
                <button className="inventoryDelete__div2-delete inventoryDelete__div2-button">Delete</button>
            </div>
        </div>
    )
}