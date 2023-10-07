const express = require('express');
const router = express.Router();

const { parse } = require('dotenv');

router.get('/', (req,res) => {
    res.render('home');
});

router.get('/nec', (req,res) => {
    res.render('nec');
});

module.exports = router;
