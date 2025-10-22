// 1. Import Express
const express = require('express');
const app = express();
const port = 5000;

// 2. Middleware to parse JSON body
// This is crucial for handling the JSON data sent from Postman ({"name": "..."})
app.use(express.json());

// 3. In-Memory Data Storage
// This array will hold your items.
let items = [];

// 4. POST Route Handler
// This handles requests to POST http://localhost:5000/items
app.post('/items', (req, res) => {
    // a. Get the data (name) from the request body
    const newItemName = req.body.name;

    // b. Basic validation
    if (!newItemName) {
        return res.status(400).send({ message: 'Item name is required' });
    }

    // c. Create the new item object with a unique ID
    // Note: Using Date.now() for a simple unique ID, similar to your output.
    const newItem = {
        id: Date.now(), 
        name: newItemName 
    };

    // d. Store the new item in the array
    items.push(newItem);

    // e. Send the 201 Created response
    // The response body contains the newly created item, matching your output.
    res.status(201).send(newItem); 
});

// 5. GET Route Handler (Optional, but useful for verification)
// This handles requests to GET http://localhost:5000/items
// to retrieve the list of items.
app.get('/items', (req, res) => {
    res.status(200).send(items);
});


// 6. Start the Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});