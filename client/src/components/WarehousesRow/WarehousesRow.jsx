import React from 'react'
import { Link } from 'react-router-dom'

import rightArrowIcon from '../../assets/icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';

import textShortener from '../../utilities/textShortener';

import './WarehousesRow.scss';


export default function WarehousesRow(props) {

    const deleteEvent = (event) => {
        // Passes the ID of that data row to the delete modal popup
        props.deleteHandler(event.target.dataset.warehouse_id);
    }

    let editUrl = `/warehouse/${props.data.id}/edit`;

    // Runs data through text shortener function
    // It only shortens a string if over a certain length
    let warehouseName = textShortener(props.data.name, 18, 1440);
    let addressText = textShortener(props.data.address, 42, 1440);
    let contactNameShortened = textShortener(props.data.contact.name, 20, 1440);
    let phoneNumber = textShortener(props.data.contact.phone, 17, 1440);
    let emailAddress = textShortener(props.data.contact.email, 23, 1440);

    return (

        <div className="data-row">
            <div  className="data-row__data-container">

                <div className="data-row__text-container warehouses__col-1">
                    <p className="data-row__text-label data-row__text-label--warehouse-label">WAREHOUSE</p>
                    <Link to={"/" + props.data.id}>
                        <p className="data-row__text-data data-row__text-data--warehouse-link">{warehouseName}</p>
                        <img src={rightArrowIcon} alt="Right arrow icon" className="data-row__right-arrow-icon"/>
                    </Link>
                </div>

                <div className="data-row__text-container warehouses__col-2">
                <p className="data-row__text-label">ADDRESS</p>
                    <p className="data-row__text-data">{addressText}</p>
                </div>

                <div className="data-row__text-container warehouses__col-3">
                    <p className="data-row__text-label">CONTACT NAME</p>
                    <p className="data-row__text-data">{contactNameShortened}</p>
                </div>

                <div className="data-row__text-container warehouses__col-4">
                    <p className="data-row__text-label">CONTACT INFORMATION</p>
                    <p className="data-row__text-data">{phoneNumber}</p>
                    <p className="data-row__text-data">{emailAddress}</p>
                </div>
            </div>
            
            {/* Action icons container */}
            <div className="data-row__actions-icons-container warehouses__col-5">
                <img onClick={deleteEvent} data-warehouse_id={props.data.id} type="button" src={deleteIcon} alt="Delete" className="data-row__action-icon"/>
                <Link className="data-row__icon-link" to={editUrl}><img type="button" src={editIcon} alt="Edit" className="data-row__action-icon"/></Link>
            </div>
        </div>

    )
}
