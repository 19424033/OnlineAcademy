const express = require("express");
const categoryModel = require("../models/category.model");
const { cloudinary } = require('../../server/utils/cloudinary');

const router = express.Router();


router.get('/:id', async function (req, res) {
    const id = req.params.id || 0;
    const categories = await categoryModel.getCategory(id);
    if (categories === null) {
      return res.status(204).end();
    }
    res.json(categories);
  }); 

module.exports = router;
