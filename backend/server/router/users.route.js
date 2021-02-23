const express = require("express");
const bcrypt = require("bcryptjs");

const usersModel = require("../models/users.model");

const router = express.Router();

// router.post("/", async function (req, res) {  //  tao tai khoan
//   const user = req.body;
//   user.Password = bcrypt.hashSync(user.Password, 3);
//   user.id = await usersModel.add(user);
//   delete user.password;
//   res.status(201).json(user);
// });

router.get("/", async function (req, res) {
  // dua vao token lấy user

  console.log(req.accessTokenPayload);
  const list = await usersModel.all();

  res.json(list);
});

router.get("/:id", async function (req, res) {
  const id = req.params.id || 0;
  // console.log(req)
  const single = await usersModel.single(id);

  if (single === null) {
    return res.status(204).end();
  }

  res.json(single);
});

router.post("/teacher", async function (req, res) {
  //  tao tai khoan
  const addTeacher = req.body;
  console.log(addTeacher);

  const user = await usersModel.singleByEmail(addTeacher.Email);
  console.log(user);

  if (user !== null) {
    return res.status(204).json();
  } else {
    addTeacher.Password = bcrypt.hashSync("123456", 3);
    addTeacher.Jobid = 3;
    addTeacher.Isactive = 1;
    addTeacher.OTP_Confim = 1;
    const resual = await usersModel.add(addTeacher);
    delete addTeacher.Password;
    res.status(200).json(resual);
  }
});

router.put("/:id", async function (req, res) {
  //  tao tai khoan
  const id = req.params.id;
  const user = req.body;
  delete user.key;
  delete user.Usersid;
  delete user.OTP_Confim;

  console.log(user);
  await usersModel.update(id, user);
  res.status(200).json({
    message: "update success",
  });
});

router.delete("/:id", async function (req, res) {
  const id = req.params.id || 0;
  if (id === 0) {
    return res.status(304).end();
  }
  await usersModel
    .del(id)
    .then((result) => {
      res.json({
        message: "delete success",
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
