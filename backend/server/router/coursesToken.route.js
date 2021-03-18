const express = require("express");
const categoryModel = require("../models/category.model");


const router = express.Router();

router.post("/addCmt", async function (req, res) {
    const addCmt = req.body;

    const resual = await categoryModel.addRateCmt(addCmt);
    res.status(200).json(resual);
});

module.exports = router;
