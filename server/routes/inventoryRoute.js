const express = require('express')
const router = express.Router()
const inventories = require('../inventories.json');
const app = express();

router
.get('/', (req, res) => {
    return res.send(inventories);
    });

// .post goes here

router
.get('/:id', (req, res) => {
    let inventoryID = inventories.find((inventory)=> inventory.id == req.params.id);
    return res.send(inventoryID);
    })

.delete('/:id', (_req, res) => {
    let inventoryID = inventories.find((inventory)=> inventory.id == req.params.id);
    return res.send('This test delete worked')
});

module.exports = router;