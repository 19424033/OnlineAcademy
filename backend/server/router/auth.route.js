const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const randomstring = require("randomstring");
const userModel = require("../models/users.model");
const mailer = require("../utils/mailOTP");
const router = express.Router();

router.post("/log-in", async function (req, res) {
  const user = await userModel.singleByEmail(req.body.Email);
  if (user === null) {
    return res.status(200).json({
      authenticated: false,
    });
  }

  if (!bcrypt.compareSync(req.body.Password, user.Password)) {
    return res.status(200).json({
      authenticated: false,
    });
  }

  const accessToken = jwt.sign(
    {
      Usersid: user.Usersid,
      Jobid: user.Jobid,
      Dislayname: user.Dislayname,
      OTP_Confim: user.OTP_Confim,
    },
    "SECRET_KEY",
    {
      expiresIn: 60 * 10, // seconds
    }
  );

  const refreshToken = randomstring.generate();
  await userModel.updateRefreshToken(user.Usersid, refreshToken);

  res.status(200).json({
    authenticated: true,
    accessToken,
    refreshToken,
  });
});
router.post("/log-out", async function (req, res) {});

router.post("/register", async function (req, res) {
  //  tao tai khoan
  const user_register = req.body; /// Dislayname,   Email  Password,   Created_at
  //  console.log(user_register);

  const user = await userModel.singleByEmail(user_register.Email);
  console.log(user);

  if (user !== null) {
    return res.status(204).json();
  } else {
    user_register.OTP = Math.random().toString().substring(2, 8);
    user_register.Password = bcrypt.hashSync(user_register.Password, 3);
    user_register.Jobid = 2;
    user_register.Isactive = 1;
    user_register.Userid = await userModel.add(user_register);
    delete user_register.Password;
    mailer(user_register.Email, user_register.OTP);
    res.status(200).json();
  }
});

router.get("/register/:id/:otp", async function (req, res) {
  const id = req.params.id || 0;
  const otp = req.params.otp;
  const single = await userModel.checkOTP(id, otp);

  if (single === null) {
    res.json(false);
  } else {
    const accessToken = jwt.sign(
      {
        Usersid: single.Usersid,
        Jobid: single.Jobid,
        Dislayname: single.Dislayname,
        OTP_Confim: single.OTP_Confim,
      },
      "SECRET_KEY",
      {
        expiresIn: 60 * 10, // seconds
      }
    );

    const refreshToken = randomstring.generate();
    await userModel.updateRefreshToken(single.Usersid, refreshToken);

    res.status(200).json({
      authenticated: true,
      accessToken,
      refreshToken,
    });
  }
});

router.put("/register/:id", async function (req, res) {
  const user = req.params;
  user.OTP = Math.random().toString().substring(2, 8);
  const userres = await userModel.updateOTP(user.id, user.OTP); // đổi OTP xong thì gửi mail lại
  mailer(userres.Email, user.OTP);
  res.json(userres.Email);
});

router.post("/forgot-password", async function (req, res) {});

router.put("/forgot-password", async function (req, res) {});

router.post("/refresh", async function (req, res) {
  // req.body = {
  //   accessToken,
  //   refreshToken
  // }

  const { accessToken, refreshToken } = req.body;
  const { Usersid, Jobid } = jwt.verify(accessToken, "SECRET_KEY", {
    ignoreExpiration: true,
  });

  const ret = await userModel.isValidRefreshToken(Usersid, refreshToken);
  if (ret === true) {
    const newAccessToken = jwt.sign({ Usersid, Jobid }, "SECRET_KEY", {
      expiresIn: 60 * 10,
    });
    return res.json({
      accessToken: newAccessToken,
    });
  }

  res.status(400).json({
    message: "Invalid refresh token.",
  });
});

module.exports = router;
