const express = require('express')
const router = express.Router()
let warehouses = require('../warehouses.json');
let inventories = require('../inventories.json');
const app = express();
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
    // for (let i = 0; i < warehouses.length; i++)
    {
    let currentWarehouse = warehouses[i];
    let newInventory = inventory.filter((inventory)=> inventory.warehouseID !== req.params.id)
    let newWarehouse = warehouses.filter((warehouse)=> warehouse.id !== req.params.id)

        if ((currentWarehouse.id == req.params.id))
        // if (currentWarehouse.id == req.params.id)
        {
        // let newWarehouse = warehouses.splice(i, 1)

        // warehouses.splice(i, 1);
        fs.writeFile('warehouses.json', JSON.stringify(newWarehouse), (err) => {if (err){
            console.log(err)
        }})
        fs.writeFile('inventories.json', JSON.stringify(newInventory), (err) => {if (err){
            console.log(err)
        }} )
        return res.send(req.params.id + ' ' + 'is deleted')
        }
    }
}
);

module.exports = router;