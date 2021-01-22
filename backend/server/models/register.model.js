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
    console.log(user)
    const ids = await db("users").insert(user);
    return ids[0];
  },
  async updateOTP(id, OTP) {
     await db("users").where("usersid", id).update("OTP", OTP);
     const user = await db("users").where("usersid", id);
    if (user.length === 0) {
      return null;
    }
    return user[0];
  },

  async checkOTP(id, OTP) {
    const user = await db("users").where({usersid: id,OTP:OTP});
   if (user.length === 0) {
     return null;
   }
   return user[0];
 },
};
