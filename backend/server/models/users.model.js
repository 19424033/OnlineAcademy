const db = require("../utils/db");

module.exports = {
  all() {
    return db("users");
  },

  async single(id) {
    const user = await db("users").where("usersid", id);
    if (user.length === 0) {
      return null;
    }
    return user[0];
  },

  async add(user) {
    const ids = await db("users").insert(user);
    return ids[0];
  },

  del(id) {
    return db("users").where("usersid", id).del();
  },

  update(id, product) {
    return db("usersid").where("usersid", id).update(product);
  },
  async updateOTPEmail(email, otp) {
    return db("users").where("Email", email).update("OTP", otp);
  },

  async singleByEmail(email) {
    const users = await db("users").where("Email", email);

    if (users.length === 0) {
      return null;
    }
    return { ...users[0] };
  },
  async resetPassword(Email, password) {
    var user = await db("users").where({ Email: Email });
    if (user.length === 0) {
      return null;
    } else {
      await db("users").where("Email", Email).update("OTP_Confim", 1);
      user = await db("users")
        .where("Email", Email)
        .update("Password", password);
      return user[0];
    }
  },
  async changePassword(Email, newPassword) {
    var user = await db("users").where({ Email: Email });
    if (user.length === 0) {
      return null;
    } else {
      user = await db("users")
        .where("Email", Email)
        .update("Password", newPassword);
      return user[0];
    }
  },
  async checkOTP(id, OTP) {
    var user = await db("users").where({ usersid: id, OTP: OTP });
    if (user.length === 0) {
      return null;
    } else {
      await db("users").where("usersid", id).update("OTP_Confim", 1);
      user = await db("users").where({ usersid: id, OTP: OTP });
      return user[0];
    }
  },
  async updateOTP(id, OTP) {
    await db("users").where("usersid", id).update("OTP", OTP);
    const user = await db("users").where("usersid", id);
    if (user.length === 0) {
      return null;
    } else {
      return user[0];
    }
  },

  updateRefreshToken(id, refreshToken) {
    return db("users").where("usersid", id).update("rfToken", refreshToken);
  },

  async isValidRefreshToken(id, refreshToken) {
    const list = await db("users")
      .where("usersid", id)
      .andWhere("rfToken", refreshToken);
    if (list.length > 0) {
      return true;
    }

    return false;
  },
};
