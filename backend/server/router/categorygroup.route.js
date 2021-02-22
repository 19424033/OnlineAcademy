const express = require("express");
const router = express.Router();
const categorygroupModel = require("../models/categorygroup.model");

router.get("/", async function (req, res) {
  const list = await categorygroupModel.all();
  res.json(list);
});

router.post("/", async function (req, res) {
  const addCategoryGroup = req.body;
  console.log(addCategoryGroup);
  addCategoryGroup.Isactive =1;

    const resual = await categorygroupModel.add(addCategoryGroup);
    res.status(200).json(resual);
});
router.put("/:id", async function (req, res) {
  const id = req.params.id;
  const CategoryGroup = req.body;

  delete CategoryGroup.Created_at;
  delete CategoryGroup.CategoryGroupid;

  await categorygroupModel.update(id, CategoryGroup);
  res.status(200).json({
    message: "update success",
  });
});
router.delete("/:id", async function (req, res) {
  const id = req.params.id || 0;
  if (id === 0) {
    return res.status(304).end();
  }
  await categorygroupModel.delete(id).then((result) => {
    res.json({
      message: "delete success",
    });
  }).catch((err) => {
    res.status(500).json(err);
  });
});
module.exports = router;
