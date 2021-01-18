import React from 'react';
import '../Inventory/InventoryDelete.scss';
import close from '../../assets/icons/close-24px.svg'

export default function InventoryDelete(props) {

    // Cancels the delete action and closes the popup
    const cancelEvent = () => {
        // Passes the ID of that data row to the delete modal popup
        props.cancelHandler()
    }

    // Passes the ID to delete to the Axios Delete function
    const axiosDeleteEvent = (event) => {
        props.axiosDeleteHandler(event.target.dataset.inventory_id);
    }    

    return (
        <div className="inventoryDelete" onClick={cancelEvent}>
            <div className="inventoryDelete__divs-container">
                <div className="inventoryDelete__div1">
                    <img onClick={cancelEvent} src={close} className="inventoryDelete__div1-close" alt="close button"></img>
                    <div className="inventoryDelete__div1-block">
                        <h1 className="inventoryDelete__div1-block-title">Delete {props.data.itemName} inventory item?</h1>
                        <p className="inventoryDelete__div1-block-text">Please confirm that you’d like to delete {props.data.itemName} from the inventory list. You won’t be able to undo this action.</p>
                    </div>
                </div>
                <div className="inventoryDelete__div2">
                    <button onClick={cancelEvent} className="inventoryDelete__div2-cancel inventoryDelete__div2-button">Cancel</button>
                    <button onClick={axiosDeleteEvent} data-inventory_id={props.data.id} className="inventoryDelete__div2-delete inventoryDelete__div2-button">Delete</button>
                </div>
            </div>
        </div>
    )
}
