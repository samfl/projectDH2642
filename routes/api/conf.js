const express = require('express');
const router = express.Router();

router.get('/conf', (req, res) =>{
    res.json(process.env.API_CONFIG)
});