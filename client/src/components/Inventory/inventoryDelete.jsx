import React from 'react';
import './InventoryDelete.scss';
import close from '../../assets/icons/close-24px.svg'

export default function InventoryDelete(props) {

    let id = 0;
    if (props.data.id) {
        id = props.data.id;
    }

    // Cancels the delete action and closes the popup
    const cancelEvent = () => {
        // Passes the ID of that data row to the delete modal popup
        props.cancelHandler()
    }

    // Passes the ID to delete to the Axios Delete function
    const axiosDeleteEvent = (event) => {
        props.axiosDeleteHandler(event.target.dataset.inventory_id);
    }    

    console.log('%c InventoryDelete has been run. Its props:', "color: pink; font-weight: bold;");
    console.log(props);

    return (

        <div className="inventoryDelete" onClick={cancelEvent}>
            <div className="inventoryDelete__divs-container">
                <div className="inventoryDelete__div1">
                    <img onClick={cancelEvent} src={close} className="inventoryDelete__div1-close" alt="close button"></img>
                    <div className="inventoryDelete__div1-block">
                        <h1 className="inventoryDelete__div1-block-title">Delete Television inventory item?</h1>
                        <p className="inventoryDelete__div1-block-text">Please confirm that you’d like to delete Television from the inventory list. You won’t be able to undo this action.</p>
                    </div>
                </div>
                <div className="inventoryDelete__div2">
                    <button onClick={cancelEvent} className="inventoryDelete__div2-cancel inventoryDelete__div2-button">Cancel</button>
                    <button onClick={axiosDeleteEvent} data-inventory_id={id} className="inventoryDelete__div2-delete inventoryDelete__div2-button">Delete</button>
                </div>
            </div>
        </div>
    )
}
