import React from 'react';
import '../Warehouses/warehouseDelete.scss';
import close from '../../assets/icons/close-24px.svg'

export default function WarehouseDelete(props) {

    const cancelEvent = () => {
        // Passes the ID of that data row to the delete modal popup
        props.cancelHandler()
    }

    // Passes the ID to delete to the Axios Delete function
    const axiosDeleteEvent = (event) => {
        props.axiosDeleteHandler(event.target.dataset.warehouse_id);
    }    

    const { id, name } = props.data;

    return (
        <div className="warehouseDelete" onClick={cancelEvent}>
            <div className="warehouseDelete__divs-container">
                <div className="warehouseDelete__div1">
                    <div className="warehouseDelete__div1-close">
                        <img src={close} className="warehouseDelete__div1-close-image" alt="close button" onClick={cancelEvent}></img>
                    </div>
                    <div className="warehouseDelete__div1-block">
                        <h1 className="warehouseDelete__div1-block-title">Delete {name} warehouse?</h1>
                        <p className="warehouseDelete__div1-block-text">Please confirm that you’d like to delete {name} from the list of warehouses. You won’t be able to undo this action.</p>
                    </div>
                </div>
                <div className="warehouseDelete__div2">
                    <button className="warehouseDelete__div2-cancel warehouseDelete__div2-button" onClick={cancelEvent}>Cancel</button>

                    {/* Delete Button */}
                    <button onClick={axiosDeleteEvent} data-warehouse_id={id}  className="warehouseDelete__div2-delete warehouseDelete__div2-button">Delete</button>
                </div>
            </div>
        </div>
    )
}
