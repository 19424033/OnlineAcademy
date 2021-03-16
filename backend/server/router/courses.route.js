const express = require("express");
const categoryModel = require("../models/category.model");
const categorygroupModel = require("../models/categorygroup.model");

const router = express.Router();


router.get('/category/:id/:userid', async function (req, res) {
  const id = req.params.id || 0;
  const userid = parseInt(req.params.userid || 0);
  const categories = await categoryModel.getCategory(id, userid);
  if (categories === null) {
    return res.status(204).end();
  }
  res.json(categories);
}); 

router.put('/products/updateViewer/:id/:quanview', async function (req, res) {
  const id = req.params.id || 0;
  const quanview = req.params.quanview || 0;
  const products = await categoryModel.updateProductView(id,quanview);
  if (products === null) {
    return res.status(204).end();
  }
  res.json(products);
}); 

router.get('/categorygroup', async function (req, res) {
  const id = req.params.id || 0;
  const categorygroup = await categorygroupModel.all();
  if (categorygroup === null) {
    return res.status(204).end();
  }
  res.json(categorygroup);
}); 

router.get('/getCategoryByGroupId/:id', async function (req, res) {
  const id = req.params.id || 0;
  const categorygroup = await categoryModel.getCategoryByGroupId(id);
  if (categorygroup === null) {
    return res.status(204).end();
  }
  res.json(categorygroup);
}); 

router.get('/getCategoryAllGroup', async function (req, res) {
  const keyword = req.params.keyword || '';
  const categoryList = await categoryModel.getCategoryAllGroup();
  if (categoryList === null) {
    return res.status(204).end();
  }
  res.json(categoryList);
}); 

module.exports = router;
