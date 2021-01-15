const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const randomstring = require("randomstring");
const userModel = require("../models/users.model");

const router = express.Router();

router.post("/", async function (req, res) {
  const user = await userModel.singleByEmail(req.body.Email);
  console.log(1, user);
  if (user === null) {
    return res.json({
      authenticated: false,
    });
  }

  if (!bcrypt.compareSync(req.body.Password, user.Password)) {
    return res.json({
      authenticated: false,
    });
  }

  const accessToken = jwt.sign(
    {
      Usersid: user.Usersid,
      Jobid: user.Jobid,

    },
    "SECRET_KEY",
    {
      expiresIn: 10 * 60, // seconds
    }
  );

  const refreshToken = randomstring.generate();
  await userModel.updateRefreshToken(user.Usersid, refreshToken);

  res.json({
    authenticated: true,
    accessToken,
    refreshToken,
  });
});

router.post("/refresh", async function (req, res) {
  // req.body = {
  //   accessToken,
  //   refreshToken
  // }

  const { accessToken, refreshToken } = req.body;
  const { Usersid,Jobid } = jwt.verify(accessToken, "SECRET_KEY", {
    ignoreExpiration: true,
  });

  const ret = await userModel.isValidRefreshToken(Usersid, refreshToken);
  if (ret === true) {
    const newAccessToken = jwt.sign({ Usersid,Jobid }, "SECRET_KEY", {
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
