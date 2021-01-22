const express = require("express");
const registerModel = require("../models/register.model");
const bcrypt = require("bcryptjs");
const mailer = require("../utils/mailOTP");
const router = express.Router();

router.post("/", async function (req, res) {
  //  tao tai khoan
  const user_register = req.body;
  user_register.OTP = Math.random().toString().substring(2, 8);
  user_register.Password = bcrypt.hashSync(user_register.Password, 3);
  user_register.Jobid = 2;
  //   console.log(user_register);

  //   user.Password = bcrypt.hashSync(user.Password, 3);
  user_register.Userid = await registerModel.add(user_register);
  delete user_register.Password;
  mailer(user_register.Email, user_register.OTP);
  res.status(201).json(user_register);
});

router.get("/", async function (req, res) {
  // dua vao token lấy user
  //   console.log(req.accessTokenPayload);
  //   const list = await usersModel.all();
  //   res.json(list);
});

router.get("/:id/:otp", async function (req, res) {
    const id = req.params.id || 0;
    const otp = req.params.otp; 
    const single = await registerModel.checkOTP(id,otp);

    if (single === null) {
      return res.json(false);
    }else{
      return res.json(true);
    }
});

router.put("/:id", async function (req, res) {
  const user = req.params;
  user.OTP = Math.random().toString().substring(2, 8);
  console.log(user);

  const userres = await registerModel.updateOTP(user.id, user.OTP); // đổi OTP xong thì gửi mail lại

  mailer(userres.Email, user.OTP);
  res.json( {status: "success"});
  // .then(function (response) {
  //   res.json({
  //    message: response,
  //     status: "success",
  //   });
  // })
  // .catch(function (error) {
  //   res.json({
  //      message: error,
  //     status: "false",
  //   });
  // });
});
module.exports = router;
