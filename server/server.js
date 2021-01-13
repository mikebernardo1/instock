// initialize Express in project
const express = require('express');
const app = express();
const cors = require('cors');

const inventoryRoute = require('./routes/inventoryRoute');
const warehouseRoute = require('./routes/warehouseRoute');

app.use(cors());
app.use(express.json());

app.use('/inventory', inventoryRoute);
app.use('/warehouse', warehouseRoute);


// start Express on port 8080
app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
    });