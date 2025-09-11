const express = require('express');


let profile = {};
const router = express.Router();
router.get('/', (req, res)=>{
    res.json(profile);
})
router.post('/', (req, res, next)=>{
    const {name, email, bio} = req.body;
    profile = {name, email, bio};
    console.log("Updated Profile", profile);
    res.json(profile);
})

module.exports = router;

