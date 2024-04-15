const express = require("express");
const arr = require("../controller/control");

const router = express.Router()

router.get("/", (req,res) => {
    console.log(arr);
    res.json(arr)
})


router.get("/about", (req,res) => {
    res.json('about us')
})

module.exports = router