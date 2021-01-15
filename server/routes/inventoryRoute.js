const express = require('express')
const router = express.Router()
const inventories = require('../inventories.json');
const app = express();

router
.get('/', (req, res) => {
    return res.send(inventories);
    });

router
.get('/:warehouseID', (req, res) => {
    let warehouseID = inventories.filter((inventory)=> inventory.warehouseID == req.params.warehouseID);
    return res.send(warehouseID);
    });

// .post goes here

router
.get('/:id', (req, res) => {
    let inventoryID = inventories.find((inventory)=> inventory.id == req.params.id);
    return res.send(inventoryID);
    })

.delete('/:id', (req, res) => {
    for (let i = 0; i < inventories.length; i++){
    let currentInventory = inventories[i];

        if (currentInventory.id == req.params.id){
        inventories.splice(i, 1);

        return res.send(req.params.id + ' ' + 'is deleted')
        }
    }
});

module.exports = router;