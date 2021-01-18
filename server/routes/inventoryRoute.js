const express = require('express')
const router = express.Router()
const inventories = require('../data/inventories.json');
const warehouses = require('../data/warehouses.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { stringify } = require('querystring');

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

    fs.readFile('./data/inventories.json', function (err, data) {
        let json = JSON.parse(data);
        json.push(upload);    
        fs.writeFile("./data/inventories.json", JSON.stringify(json), function(err){
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

        fs.writeFile('./data/inventories.json', JSON.stringify(newInventory), (err) => {if (err){
            console.log(err)
        }})

        return res.send(req.params.id + ' ' + 'is deleted')
        }
    }
})

.put('/item/:id', (req, res) => {
    let requestedId = req.params.id
    let updatedItem;

    // Validating the data's presence
    if (
        req.body.id !== '' &&
        req.body.warehouseID !== '' &&
        req.body.warehouseName !== '' &&
        req.body.itemName !== '' &&
        req.body.description !== '' &&
        req.body.category !== '' &&
        req.body.status !== '') {
            // Set the new info into a new variable
            updatedItem = {
                id: requestedId,
                warehouseID: req.body.warehouseID,
                warehouseName: req.body.warehouseName,
                itemName:req.body.itemName,
                description: req.body.description,
                category: req.body.category,
                status: req.body.status,
                quantity:req.body.quantity,
            }
            
            // Read the existing file
            fs.readFile('./data/inventories.json', function (_err, data) {
                // Store the data into array
                let originalArray = JSON.parse(data);
                // Filter out everything other than item being updated
                // and store in new array
                let inventoryAfterUpdate = originalArray.filter(item => item.id !== requestedId)
                // Push the updated item into the array
                // created in above step
                inventoryAfterUpdate.push(updatedItem);
                // Write the new array to the file. 
                fs.writeFile("./data/inventories.json", JSON.stringify(inventoryAfterUpdate), function(err){
                    console.log(err);
                });
            })
        } else return res.status(400).send("Please send valid data in correct format.")
    return res.status(200).send(updatedItem)
})

module.exports = router;