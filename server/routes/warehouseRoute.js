const { request } = require('express');
const express = require('express')
const router = express.Router()
const warehouses = require('../warehouses.json');
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

.delete('/:id', (req, res) => {
    for(let i = 0; i < warehouses.length; i++){
    let currentWarehouse = warehouses[i];

        if (currentWarehouse.id == req.params.id){
        warehouses.splice(i, 1);

        return res.send(req.params.id + '' + 'is deleted');
        }
    }
});

module.exports = router;