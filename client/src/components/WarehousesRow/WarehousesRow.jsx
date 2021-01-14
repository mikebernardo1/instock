import React from 'react'
import { Link } from 'react-router-dom'

import rightArrowIcon from '../../assets/icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';

import textShortener from '../../utilities/textShortener';

import './WarehousesRow.scss';


export default function WarehousesRow() {

    // Runs data through text shortener function
    let warehouseName = textShortener("Santa Monica", 18, 1440);
    let addressText = textShortener("890 Brannan Street, San Francisco, USA", 42, 1440);
    let contactName = textShortener("Brad McDonald", 20, 1440);
    let phoneNumber = textShortener("1-555-8950-5555", 17, 1440);
    let emailAddress = textShortener("bmcdonald@instock.com", 23, 1440);

    return (

        <div className="data-row">
            <div  className="data-row__data-container">

                <div className="data-row__text-container warehouses__col-1">
                    <p className="data-row__text-label data-row__text-label--warehouse-label">WAREHOUSE</p>
                    <Link to="/">
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
                    <p className="data-row__text-data">{contactName}</p>
                </div>

                <div className="data-row__text-container warehouses__col-4">
                    <p className="data-row__text-label">CONTACT INFORMATION</p>
                    <p className="data-row__text-data">{phoneNumber}</p>
                    <p className="data-row__text-data">{emailAddress}</p>
                </div>
            </div>
            
            {/* Action icons container */}
            <div className="data-row__actions-icons-container warehouses__col-5">
                <img type="button" src={deleteIcon} alt="Delete" className="data-row__action-icon"/>
                <img type="button" src={editIcon} alt="Edit" className="data-row__action-icon"/>
            </div>
        </div>

    )
}
