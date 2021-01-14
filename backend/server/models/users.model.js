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

  add(user) {
    return db("users").insert(user);
  },

  del(id) {
    return db("users").where("usersid", id).del();
  },

  update(id, product) {
    return db("usersid").where("usersid", id).update(product);
  },
};
