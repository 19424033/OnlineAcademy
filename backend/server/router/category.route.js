const express = require("express");
const categoryModel = require("../models/category.model");
const { cloudinary } = require('../../server/utils/cloudinary');

const router = express.Router();


const someFunction = (myArray) => {
    const promises = myArray.map(async (item, index) => {
        const folder = item.CategoryName.split(" ").join("_")
        const { resources } = await cloudinary.search
            .expression(`folder: ${folder}`)
            .sort_by('public_id', 'asc')
            .execute();
        return {
            ...item,
            resources: resources
        }
    });
    return Promise.all(promises);
}

router.get("/", async function (req, res) {
    const list = await categoryModel.allAdmin();
    if (list.length !== 0) {
        res.json(list);
    }
    else {
        console.log("null")
    }
});

router.get('/:id', async function (req, res) {
    const id = req.params.id || 0;
    const categories = await categoryModel.single(id);
    if (categories === null) {
      return res.status(204).end();
    }
    res.json(categories);
  });

router.put("/:id", async function (req, res) {
    const id = req.params.id;
    const values = req.body;
  
  
    await categoryModel.update(id, values);
    res.status(200).json({
      message: "update success",
    });
  });

module.exports = router;
