import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import WarehousesRow from '../WarehousesRow/WarehousesRow';
import WarehouseDelete from './WarehouseDelete';
=======
import WarehousesRow from '../WarehousesRow/WarehousesRow'
import WarehouseDelete from './WarehouseDelete'
>>>>>>> 9facd14bfc97da083f330883542e54a66487ae45

import './warehouses.scss';

// Import images
import searchIcon from '../../assets/icons/search-24px.svg';
import sortIcon from '../../assets/icons/sort-24px.svg';


export class Warehouses extends Component {

    apiURL = 'http://localhost:8080/';
  
    // modalAttributes controls whether the Delete Warehouses popup is active
    state = {
        tableData: null,

        modalAttributes: {
            visible: false,
            data: null
        },

        tableAttributes: {
            mainFunctionsEnabled: true,
            refreshNeeded: false,
            justDeleted: null
        }
    };

    componentDidMount() {
        this.apiFetchCall();
    }

    componentDidUpdate() {
        // If an entry was just deleted, refreshNeeded would be set to true
        // so, refresh the table:
        if (this.state.tableAttributes.refreshNeeded) {
            this.apiFetchCall();
            this.setState({
                tableAttributes: {
                    mainFunctionsEnabled: this.state.tableAttributes.mainFunctionsEnabled,
                    // Turn off refresh Needed. The other values stay as they are
                    refreshNeeded: false,
                    justDeleted: this.state.tableAttributes.justDeleted
                }
            })            
        }
    }    
    
    apiFetchCall = () => {
        Axios
            .get(`${this.apiURL}warehouse`)
            .then((res) => {
                this.setState({
                    tableData: res.data
                });
            })
            .catch((err) => console.log(err));
    }    

    // User presses Delete icon, the following runs
    handleDeleteButton = (targetID) => {
        if (this.state.tableAttributes.mainFunctionsEnabled) {

            Axios.get(`${this.apiURL}warehouse/${targetID}`)
            .then(res => {
                // Disable buttons while modal is visible
                this.setState({
                    modalAttributes: {
                        visible: true,
                        data: res.data
                    },
                    tableAttributes: {
                        mainFunctionsEnabled: false,
                        refreshNeeded: this.state.tableAttributes.refreshNeeded,
                        justDeleted: this.state.tableAttributes.justDeleted
                    }
                })              
           
            })  
            .catch(errors => {
              console.error(errors);
            })  
        }
    }

    // Cancels a Delete Warehouse popup
    handleCancel = () => {
        this.setState({
            modalAttributes: {
                visible: false,
                data: null
            },
            tableAttributes: {
                mainFunctionsEnabled: true,
                refreshNeeded: this.state.tableAttributes.refreshNeeded,
                // justDeleted is the most recent warehouse deleted. This is used for filtering it out during the map function on render.
                justDeleted: null
            }
        })            
    }

    // Runs when the user selects the Delete button on the popup
    handleAxiosDelete = (targetID) => {
            Axios.delete(`${this.apiURL}warehouse/${targetID}`)
            .then(res => {
                console.log('Entry deleted.');
                console.log(res);

                this.setState({
                    tableData: null,
                    modalAttributes: {
                        visible: false,
                        data: null
                    },
                    tableAttributes: {
                        mainFunctionsEnabled: true,
                        refreshNeeded: true,
                        justDeleted: targetID
                    }
                })              
            })  
            .catch(errors => {
              console.error(errors);
            })  
    }


    render() {
        document.title = "InStock - Warehouses";

        // Returns a blank area until Axios data for the state is loaded
        if (!this.state.tableData) {
            return null;
        }


        let modalRender = null;

        if (this.state.modalAttributes.visible) {
            modalRender = <WarehouseDelete data={this.state.modalAttributes.data} cancelHandler={this.handleCancel} axiosDeleteHandler={this.handleAxiosDelete} />;
        }

        return (         
            <>
            {modalRender}

            <section className="warehouses">
                <WarehouseDelete/>

                {/* Display modal if its visible property is true */}

                {/* Section "Header" including search field, Add New Warehouse button */}
                <div className="warehouses__header">
                    <h1 className="warehouses__heading">Warehouses</h1>
    
                    <div className="search">
                        <input type="text" className="search__input" placeholder="Search..." />
                        <img src={searchIcon} alt="Search" className="search__icon"/>     
                    </div>
    
                    {/* Add New Warehouse button */}
                    <Link to="/" className="warehouses__button-link"><button className="warehouses__add-new-warehouse-button">+ Add New Warehouse</button></Link>
                </div>
    
                {/* Column headings with Sort buttons - Displays:None on mobile */}
                <div className="columns-header">
                    <div className="columns-header__row-container warehouses__cols-1-to-4">
                        <div className="columns-header__heading-container warehouses__col-1">
                            <p className="columns-header__heading">WAREHOUSE</p>
                            <img src={sortIcon} alt="Sort by" className="columns-header__sort-icon"/>
                        </div>
    
                        <div className="columns-header__heading-container warehouses__col-2">
                            <p className="columns-header__heading">ADDRESS</p>
                            <img src={sortIcon} alt="Sort by" className="columns-header__sort-icon"/>
                        </div>
    
                        <div className="columns-header__heading-container warehouses__col-3">
                            <p className="columns-header__heading">CONTACT NAME</p>
                            <img src={sortIcon} alt="Sort by" className="columns-header__sort-icon"/>
                        </div>
    
                        <div className="columns-header__heading-container warehouses__col-4">
                            <p className="columns-header__heading">CONTACT INFORMATION</p>
                            <img src={sortIcon} alt="Sort by" className="columns-header__sort-icon"/>
                        </div>
                    </div>
    
                    <p className="columns-header__heading warehouses__col-5 columns-header__heading--last-item">ACTIONS</p>                             
                </div>

                {this.state.tableData.filter( data => data.id !== this.state.tableAttributes.justDeleted ).map(data => {
                    return (<WarehousesRow key={data.id} data={data} deleteHandler={this.handleDeleteButton} />)
                })}                
    
            </section>
            </>
        )
    }   
}

export default Warehouses;