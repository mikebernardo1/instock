import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import './WarehouseDetails.scss';
import InventoryRow from '../InventoryRow/InventoryRow';
import TitlebarForRows from '../TitlebarForRows/TitlebarForRows';
import InventoryDelete from '../Inventory/InventoryDelete'

export class WarehouseDetails extends Component {

  apiURL = 'http://localhost:8080/';
  requestedItem = this.props.match.params.id;

  state = {

    warehouseData: null,

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
  }

  componentDidMount() {
    this.apiFetchCall(this.requestedItem);
  }

  componentDidUpdate() {
    // If an entry was just deleted, refreshNeeded would be set to true
    // if so, refresh the table:
    if (this.state.tableAttributes.refreshNeeded) {
        this.apiFetchCall(this.requestedItem);
        this.setState({

          warehouseData: this.state.warehouseData,

          tableData: this.state.tableData,
      
          modalAttributes: this.state.modalAttributes,
      
          tableAttributes: {
              mainFunctionsEnabled: this.state.tableAttributes.mainFunctionsEnabled,
              refreshNeeded: false,
              justDeleted: this.state.tableAttributes.justDeleted
          }          
        })            
    }
  }   

  apiFetchCall = (warehouseID) => {

    // Get one warehouse's info
    let requestOne = Axios.get(`${this.apiURL}warehouse/${warehouseID}`);
    //Get list of that warehouse's inventory
    let requestTwo = Axios.get(`${this.apiURL}inventory`);

    // Call both requests at once
    Axios.all([requestOne, requestTwo]).then(Axios.spread((...res) => {      
      this.setState({
        warehouseData: res[0].data,
        tableData: res[1].data,
      })
    })).catch(errors => {
      console.error(errors);
    })
  }



// User presses Delete icon, the following runs
handleDeleteButton = (targetID) => {

  if (this.state.tableAttributes.mainFunctionsEnabled) {
      Axios.get(`${this.apiURL}inventory/item/${targetID}`)
      .then(res => {

          // Disable buttons while modal is visible
          this.setState({
            warehouseData: this.state.warehouseData,

            tableData: this.state.tableData,
        
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

// Cancels a Delete inventory popup
handleCancel = () => {
  this.setState({
      warehouseData: this.state.warehouseData,
      tableData: this.state.tableData,
      modalAttributes: {
          visible: false,
          data: null
      },
      tableAttributes: {
          mainFunctionsEnabled: true,
          refreshNeeded: this.state.tableAttributes.refreshNeeded,
          justDeleted: this.state.justDeleted
      }
  })            
}

// Runs when the user selects the Delete button on the popup
handleAxiosDelete = (targetID) => {

      Axios.delete(`${this.apiURL}inventory/item/${targetID}`)
      .then(res => {
          console.log('Entry deleted.');
          console.log(res);      

          this.setState({
              warehouseData: this.state.warehouseData,
              tableData: this.state.tableData,
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

  document.title = "InStock - Warehouse Details";
  // Sets page title to its specific Warehouse name
  if (this.state.warehouseData) {
    document.title = `InStock - ${this.state.warehouseData.name} Warehouse Details`;
  } else {
    document.title = "InStock - Warehouse Details";
  }

    // Returns a blank area until Axios data for the state is loaded
  if ((!this.state.tableData) || (!this.state.warehouseData)) {
      return null;
  }

  let modalRender = null;

  // Renders delete inventory popup if visible=true
  if (this.state.modalAttributes.visible) {
    modalRender = <InventoryDelete data={this.state.modalAttributes.data} cancelHandler={this.handleCancel} axiosDeleteHandler={this.handleAxiosDelete} />;
  }   

    return (
      <>
      {modalRender}

      <article className="warehouse">
        <div className="warehouse__block">
          <header className="warehouse__block-header">
            <Link to="/warehouses">
              <button
                className="warehouse__block-header-back"
              >
                <svg
                  className="warehouse__block-header-back-svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                    fill="#2E66E6"/>
                </svg>
              </button>
            </Link>
            <h2 className="warehouse__block-header-title">{this.state.warehouseData.name}</h2>
            <button
              className="warehouse__block-header-edit"
              onClick={this.handleEditButton}
              >
              <svg
                className="warehouse__block-header-edit-svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
                  fill="#2E66E6"/>
              </svg>
              <span className="warehouse__block-header-edit-text">Edit</span>
            </button>
          </header>
          <main className="warehouse__block-main">
            <div className="warehouse__block-main-address">
              <div className="warehouse__block-main-address-block">
                <h3 className="warehouse__block-main-address-block-title">Warehouse Address:</h3>
                <address className="warehouse__block-main-address-block-street">
                  {this.state.warehouseData.address}<br />
                  {this.state.warehouseData.city}, {this.state.warehouseData.country}
                </address>

              </div>
            </div>
            <div className="warehouse__block-main-contact">
              <div className="warehouse__block-main-contact-name">
                <h3 className="warehouse__block-main-contact-name-title">Contact Name:</h3>
                <div className="warehouse__block-main-contact-name-detail">
                  <p>{this.state.warehouseData.contact.name}</p>
                  <p>{this.state.warehouseData.contact.position}</p>
                </div>
              </div>
              <div className="warehouse__block-main-contact-info">
                <h3 className="warehouse__block-main-contact-info-title">Contact Information:</h3>
                <address className="warehouse__block-main-contact-info-details">
                  <a href={`tel:${this.state.warehouseData.contact.phone}`}>{this.state.warehouseData.contact.phone}</a><br />
                  <a href={`mailto:${this.state.warehouseData.contact.email}`}>{this.state.warehouseData.contact.email}</a>
                </address>
              </div>
            </div>
          </main>
          {/* Needs a false for disabling the warehouse column
              from the inventory row component */}
          <TitlebarForRows showWarehouse={false}/>

          {this.state.tableData.filter( data => data.id !== this.state.tableAttributes.justDeleted ).filter( data => data.warehouseID === this.state.warehouseData.id ).map(data => {
                    return (
                      <div className="inventory-component--warehouse">
                        <InventoryRow
                          key={data.id}
                          inventoryItem={data}
                          showWarehouse={false}
                          deleteHandler={this.handleDeleteButton}
                        />
                      </div>                      
                    )
          })} 

        </div>
      </article>
      </>
    )
  }
}

export default WarehouseDetails