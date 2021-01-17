import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import searchIcon from '../../assets/icons/search-24px.svg';
import './Inventory.scss'

import InventoryDelete from './InventoryDelete';
import InventoryRow from '../InventoryRow/InventoryRow';
import TitlebarForRows from '../TitlebarForRows/TitlebarForRows';


class Inventory extends Component {

  apiURL = 'http://localhost:8080/';

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
  // if so, refresh the table:
  if (this.state.tableAttributes.refreshNeeded) {
      this.apiFetchCall();
      this.setState({
          tableAttributes: {
              mainFunctionsEnabled: this.state.tableAttributes.mainFunctionsEnabled,
              // Turn off refreshNeeded. The other values stay as they are
              refreshNeeded: false,
              justDeleted: this.state.tableAttributes.justDeleted
          }
      })            
  }
}    

apiFetchCall = () => {
  Axios
      .get(`${this.apiURL}inventory`)
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
      Axios.get(`${this.apiURL}inventory/item/${targetID}`)
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

// Cancels a Delete inventory popup
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
      Axios.delete(`${this.apiURL}inventory/item/${targetID}`)
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
    document.title = "InStock - Inventory";

    // Returns a blank area until Axios data for the state is loaded
    if (!this.state.tableData) {
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

      <section className="inventory">
        <div className="inventory__container">

          {/* Section "Header" including search field, Add New Warehouse button */}
          <div className="inventory__header">
              <h1 className="inventory__heading">Inventory</h1>

              <div className="search">
                <input type="text" className="search__input" placeholder="Search..." />
                <img src={searchIcon} alt="Search" className="search__icon"/>     
              </div>

              {/* Add New Inventory button */}
              <Link to="/additem" className="inventory__button-link">
                <button className="inventory__add-new-inventory-button">+ Add New item</button>
              </Link>
          </div>

          {/* Needs a true for enabling the warehouse column
              from the inventory row component */}
          <TitlebarForRows showWarehouse={true}/>

          {this.state.tableData.filter( data => data.id !== this.state.tableAttributes.justDeleted ).map(data => {
                    return (
                      <div key={data.id + "DIV"} className="inventory-component">
                      {/* Needs a showWarehouse=true for enabling the warehouse column
                          from the inventory row component */}
                        <InventoryRow
                          // inventoryItem={item1}
                          showWarehouse={true}
                          key={data.id}
                          inventoryItem={data}
                          deleteHandler={this.handleDeleteButton}
                        />
                      </div>                      
                    )
          })} 




        </div>

        
      </section>
      </>
    )
  }
}

export default Inventory