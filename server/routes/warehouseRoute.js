const express = require('express')
const router = express.Router()
let warehouses = require('../data/warehouses.json');
let inventories = require('../data/inventories.json');
const fs = require('fs');
let inventory = inventories;

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
    for (let i = 0; i < warehouses.length; i++)
    {
    let currentWarehouse = warehouses[i];

    // Use filter to match id to params.id
    let newInventory = inventory.filter((inventory)=> inventory.warehouseID !== req.params.id)
    let newWarehouse = warehouses.filter((warehouse)=> warehouse.id !== req.params.id)

        if ((currentWarehouse.id == req.params.id))
        {

        // Use fs.writeFile to permanently delete when called upon
        fs.writeFile('./data/warehouses.json', JSON.stringify(newWarehouse), (err) => {if (err){
            console.log(err)
        }})
        fs.writeFile('./data/inventories.json', JSON.stringify(newInventory), (err) => {if (err){
            console.log(err)
        }})
        return res.send(req.params.id + ' ' + 'is deleted')
        }
    }
}
);

module.exports = router;