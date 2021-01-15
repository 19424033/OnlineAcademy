const express = require("express");
const bcrypt = require("bcryptjs");
const usersModel = require("../models/users.model");

const router = express.Router();

router.post("/", async function (req, res) {
  const user = req.body;
  user.Password = bcrypt.hashSync(user.Password, 3);
  user.id = await usersModel.add(user);
  delete user.password;
  res.status(201).json(user); 
});

router.get("/", async function (req, res) {

  console.log(req.accessTokenPayload);
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
