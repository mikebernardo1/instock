import React from 'react'
import { Link } from 'react-router-dom'

import rightArrowIcon from '../../assets/icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';

import './WarehousesRow.scss';


export default function WarehousesRow() {
    return (

        <div className="data-row">
            <div  className="data-row__data-container">

                <div className="data-row__text-container col-1">
                    <p className="data-row__text-label data-row__text-label--warehouse-label">WAREHOUSE</p>
                    <Link to="/">
                        <p className="data-row__text-data data-row__text-data--warehouse-link">Santa Monica</p>
                        <img src={rightArrowIcon} alt="Right arrow icon" className="data-row__right-arrow-icon"/>
                    </Link>
                </div>

                <div className="data-row__text-container col-2">
                <p className="data-row__text-label">ADDRESS</p>
                    <p className="data-row__text-data">890 Brannan Street, San Francisco, USA</p>
                </div>

                <div className="data-row__text-container col-3">
                    <p className="data-row__text-label">CONTACT NAME</p>
                    <p className="data-row__text-data">Brad MacDonald</p>
                </div>

                <div className="data-row__text-container col-4">
                    <p className="data-row__text-label">CONTACT INFORMATION</p>
                    <p className="data-row__text-data">+1 (450) 555-0103</p>
                    <p className="data-row__text-data">bmcdonald@instock.com</p>
                </div>
            </div>
            
            {/* Action icons container */}
            <div className="data-row__actions-icons-container col-5">
                <img type="button" src={deleteIcon} alt="Delete" className="data-row__action-icon"/>
                <img type="button" src={editIcon} alt="Edit" className="data-row__action-icon"/>
            </div>
        </div>

    )
}
