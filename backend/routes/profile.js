const express = require('express');


const profile = {
    name: 'Karan',
    email : 'karan@rathod.com',
    bio : 'hello world how are you...'
}
const router = express.Router();
router.get('/', (req, res)=>{
    res.send(profile);
})

// this is for app.get pattern
// module.exports = profile;

module.exports = router;

