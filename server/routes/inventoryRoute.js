const express = require('express')
const router = express.Router()
const inventories = require('../inventories.json');
const fs = require('fs');

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

.delete('/:id', (req, res) => {
    for (let i = 0; i < inventories.length; i++){
    let currentInventory = inventories[i];

    let newInventory = inventories.filter((inventory)=> inventory.id !== req.params.id)

        if (currentInventory.id == req.params.id){

        fs.writeFile('inventories.json', JSON.stringify(newInventory), (err) => {if (err){
            console.log(err)
        }})

        return res.send(req.params.id + ' ' + 'is deleted')
        }
    }
});

module.exports = router;