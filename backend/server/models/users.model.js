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

  async singleByEmail(email) {
    const users = await db("users").where("Email", email);

    if (users.length === 0) {
      return null;
    }
    return {...users[0]};
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
