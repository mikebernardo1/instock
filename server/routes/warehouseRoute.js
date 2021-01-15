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
    });

module.exports = router;