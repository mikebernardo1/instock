import React from 'react';
import Axios from 'axios';
import './InventoryAddItem.scss';
import { Link } from 'react-router-dom';
import arrowBack from '../../assets/icons/arrow_back-24px.svg';

const apiURL = 'http://localhost:8080/warehouse';

export default class InventoryAddItem extends React.Component{

    state={
        warehouses: []
    }

    componentDidMount(){
    Axios
    .get(apiURL)
    .then((res) => {
        console.log(res.data)
        this.setState({
            warehouses: res.data
        });
    })
    .catch((err) => console.log(err));
    }

    submitHandler = (e) =>{
        e.preventDefault();
        const upload = {
            warehouseName: e.target.warehouseName.value,
            itemName: e.target.itemName.value,
            description: e.target.description.value,
            category: e.target.category.value,
            status: e.target.status.value,
            quantity: e.target.quantity.value,
        };
    
        Axios
        .post('http://localhost:8080/inventory', upload)
    }
    
    render(){
        // let filteredCategory = this.state.inventory.map(item=> item.category)
        // console.log('%c filteredCategory:', "color: orange; font-weight: bold;");
        // console.log(filteredCategory);
        
        // let filteredWarehouse = this.state.inventory.map(name=> name.warehouseName)

        const categoryArray = ['Electronics', 'Gear', 'Apparel', 'Accessories', 'Health'];
        

        // categoryOptions = categoryArray.map(category => {
        //     <option className="inventoryAddItem__div2-block-option">{category}</option>
        // });
        console.log(this.state.warehouses)
    return(
        // map out all options, make array here
        <div className="inventoryAddItem">
            <div className="inventoryAddItem__div1">
                <Link to="/inventory"><img src={arrowBack} alt="arrow back" className="inventoryAddItem__div1-arrow"></img></Link>
                <h1 className="inventoryAddItem__div1-title">Add New Inventory Item</h1>
            </div>
            <form className="inventoryAddItem__form" onSubmit={this.submitHandler} name="id" id="form">
                <div className="inventoryAddItem__mainContent">
                    <div className="inventoryAddItem__div2">
                        <h2 className="inventoryAddItem__div2-header">Item Details</h2>
                        <div className="inventoryAddItem__div2-block">
                            <h3 className="inventoryAddItem__div2-block-categoryTitle">Item Name</h3>
                            <input type="text" placeholder="Item Name" className="inventoryAddItem__div2-block-textField1" name="itemName"></input>
                        </div>
                        <div className="inventoryAddItem__div2-block">
                            <h3 className="inventoryAddItem__div2-block-categoryTitle">Description</h3>
                            <textarea placeholder="Please enter a brief descrption" className="inventoryAddItem__div2-block-textField2" name="description"></textarea>
                        </div>
                        <div className="inventoryAddItem__div2-block">
                            <h3 className="inventoryAddItem__div2-block-categoryTitle">Category</h3>
                            <select className="inventoryAddItem__div2-block-select" name="category">
                            {categoryArray.map((category, i)=> <option key = {i} className="inventoryAddItem__div2-block-option">{category}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="inventoryAddItem__div3">
                        <h2 className="inventoryAddItem__div3-header">Item Availability</h2>
                        <div className="inventoryAddItem__div3-mainSection">
                            <div className="inventoryAddItem__div3-block inventoryAddItem__div3-block-buttons">
                                <h3 className="inventoryAddItem__div3-block-categoryTitle">Status</h3>
                                <div className="inventoryAddItem__div3-block-buttons--flex">
                                    <div className="inventoryAddItem__div3-block-buttons-div1">
                                        <input type="radio" className="inventoryAddItem__div3-block-buttons-radio" name="status" value="In Stock"></input>
                                        <label className="inventoryAddItem__div3-block-buttons-div1-label">In Stock</label>
                                    </div>
                                    <div className="inventoryAddItem__div3-block-buttons-div2">
                                        <input type="radio" className="inventoryAddItem__div3-block-buttons-radio" name="status" value="Out of Stock"></input>
                                        <label className="inventoryAddItem__div3-block-buttons-div1-label">Out of Stock</label>
                                    </div>
                                </div>
                            </div>
                            <div className="inventoryAddItem__div3-block">
                                <h3 className="inventoryAddItem__div3-block-categoryTitle">Quantity</h3>
                                <input type="number" min="0" className="inventoryAddItem__div2-block-textField1 inventoryAddItem__div3-block-textField1" name="quantity"></input>
                            </div>
                            <div className="inventoryAddItem__div3-block">
                                <h3 className="inventoryAddItem__div3-block-categoryTitle">Warehouse</h3>
                                <select className="inventoryAddItem__div2-block-select" name="warehouseName">
                                    <option isdisabled className="inventoryAddItem__div2-block-option">Please select</option>
                                    {this.state.warehouses.map((warehouse)=> <option key={warehouse.id} className="inventoryAddItem__div2-block-option">{warehouse.name}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="inventoryAddItem__div4">
                <button className="inventoryAddItem__div4-button inventoryAddItem__div4-button--white" type="submit">Cancel</button>
                <button className="inventoryAddItem__div4-button inventoryAddItem__div4-button--blue" type="submit" form="form">+ Add Item</button>
            </div>
        </div>
    )}
}