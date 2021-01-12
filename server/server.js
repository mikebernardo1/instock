// initialize Express in project
const express = require('express');
const app = express();
const cors = require('cors');
const inventories = require('./inventories.json');
const warehouses = require('./warehouses.json');

app.use(cors());
app.use(express.json());

app.get('/inventory', (req, res) => {
    return res.send(inventories);
    });

app
.get('/inventory/:id', (req, res) => {
    let inventoryID = inventories.find((inventory)=> inventory.id == req.params.id);
    return res.send(inventoryID);
    });

app.get('/warehouse', (req, res) => {
    return res.send(warehouses);
    });

app
.get('/warehouse/:id', (req, res) => {
    let warehouseID = warehouses.find((warehouse)=> warehouse.id == req.params.id);
    return res.send(warehouseID);
    });

// start Express on port 8080
app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
    });