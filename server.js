const express = require('express');
const app = express(); 

// Create-react-app default: 3000 ...
const port = 5000; 

// Just a test
app.get('/', (req, res) => {
    const testData = [
        {id: 1, name: 'Mané', team: 'Liverpool'},
        {id: 2, name: 'Salah', team: 'Liverpool'},
        {id: 3, name: 'Firminho', team: 'Liverpool'}
    ];

    res.json(testData); 
})

app.listen(port, () => console.log("Server started on port "+ port));

