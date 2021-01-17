const express = require('express')
const router = express.Router()
const inventories = require('../inventories.json');
const warehouses = require('../warehouses.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router
.get('/', (req, res) => {
    return res.send(inventories);
    })

.post('/', (req, res) => {

let newWarehouseID = warehouses.find((warehouse)=> warehouse.name == req.body.warehouseName);

let upload = {
    id: uuidv4(),
    warehouseID: newWarehouseID.id,
    warehouseName: req.body.warehouseName,
    itemName:req.body.itemName,
    description: req.body.description,
    category: req.body.category,
    status: req.body.status,
    quantity:req.body.quantity,
    };

    inventories.push(upload);

    fs.readFile('inventories.json', function (err, data) {
        let json = JSON.parse(data);
        json.push(upload);    
        fs.writeFile("inventories.json", JSON.stringify(json), function(err){
        if (err);
        console.log('The "data to append" was appended to file!');
        });
    })

return res.status(201).send(upload);});

router
.get('/:warehouseID', (req, res) => {
	
    let warehouseInventory = inventories.filter((inventory)=> inventory.warehouseID == req.params.warehouseID);
	return res.send(warehouseInventory);
    })

router
.get('/item/:id', (req, res) => {
    let inventoryID = inventories.find((inventory)=> inventory.id == req.params.id);
    return res.send(inventoryID);
    })

.delete('/item/:id', (req, res) => {
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