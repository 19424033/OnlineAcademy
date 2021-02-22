const db = require("../utils/db");

module.exports = {

  all() {
    return db("categorygroup");
  },
  add(category) {
    return db("categorygroup").insert(category);
  },
  update(id, category) {
    return db('categorygroup').where('categorygroupid', id).update(category)
  },
  delete(id) {
    return db('categorygroup')
      .where('categorygroupid', id)
      .del();
  },
  GetCategoryByCategoryGroupid(id) {
    return db({ a: 'categorygroup', b: 'category' })
      .whereRaw('?? = ?? ', ['a.categorygroupid', 'b.categoryid'])
      .where('a.categorygroupid', id);

    // return  db('categorygroup')
    // .leftJoin('category', 'categorygroup.categorygroupid', '=', 'category.categoryid')
    // .where('categorygroup.categorygroupid', id);
  }
};
