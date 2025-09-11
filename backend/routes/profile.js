const express = require('express');


let profile = {};
const router = express.Router();
router.get('/', (req, res)=>{
    res.json(profile);
})
router.post('/', (req, res, next) => {
    profile = { ...profile, ...req.body };
    console.log("POST /api/profile - Updated Profile", profile);
    res.json(profile);
});

router.put('/', (req, res)=>{
    const { name, email, bio } = req.body;
    profile = {...profile, ...req.body};
    console.log("PUT /api/profile", profile);
    res.json(profile);
})

module.exports = router;

