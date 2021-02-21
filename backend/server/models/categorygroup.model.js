const db = require("../utils/db");

module.exports = {
  
  all() {
    return db("categorygroup");
  },
  add(category) {
    return db("categorygroup").insert(category);
  },
  update(id, category){
    return db('categorygroup').where('categorygroupid', id).update(category)
  },
  delete(id) {
    return db('categorygroup')
      .where('categorygroupid', id)
      .del();
  },
};
