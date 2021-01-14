const express = require("express");
const usersModel = require("../models/users.model");

const router = express.Router();

router.get("/", async function (req, res) {
  const list = await usersModel.all();

  res.json(list);
});

router.get("/:id", async function (req, res) {
  const id = req.params.id || 0;
  const single = await usersModel.single(id);

  if (detail_order === null) {
    return res.status(204).end(); 
  }

  res.json(single);
});

module.exports = router;
