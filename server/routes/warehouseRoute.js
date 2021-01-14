const { request } = require('express');
const express = require('express')
const router = express.Router()
const warehouses = require('../warehouses.json');
const inventories = require('../inventories.json');
const app = express();

router
.get('/', (req, res) => {
    return res.send(warehouses);
    });

// .post goes here

router
.get('/:id', (req, res) => {
    let warehouseID = warehouses.find((warehouse)=> warehouse.id == req.params.id);
    return res.send(warehouseID);
    })

.delete('/:id /inventory/:warehouseID', (req, res) => {
    for (let i = j= 0; i < warehouses.length  && j < inventories.length; i++, j++)
    
    {
    let currentWarehouse = warehouses[i];
    let warehouseInventory = inventories[j];

        if ((currentWarehouse.id == req.params.id) && (warehouseInventory.warehouseID == currentWarehouse.id)){
        warehouses.splice(i, 1) && inventories.splice(i,1);

        return res.send(req.params.id + '' + 'is deleted');
        }
    }
});

module.exports = router;