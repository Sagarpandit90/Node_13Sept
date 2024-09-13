const express = require('express');
const router = express.Router();

const usercontrollers = require('../controllers/usercontroller');

router.get("/users",(req,res)=>{
    usercontrollers.getAllUser(req,res);
});

module.exports = router;
