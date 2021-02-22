const { json } = require("body-parser");
const express = require("express");
const categoryModel = require("../models/category.model");
const router = express.Router();

router.get("/yeuthich", async function (req, res) {
    const list = await categoryModel.yeuthich();
    res.json(list);
});

router.get("/luotxem", async function (req, res) {
    const list = await categoryModel.luotxem();
    res.json(list);
});

router.get("/dangky", async function (req, res) {
    const list = await categoryModel.dangky();
    res.json(list);
});

router.get("/moinhat", async function (req, res) {
    const list = await categoryModel.moinhat();
    res.json(list);
});

module.exports = router;
