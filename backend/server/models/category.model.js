const db = require("../utils/db");

module.exports = {
  all() {
    return db("category").where("Isactive",true);
  },

  async single(Categoryid) {
    const category = await db("category").where("Categoryid", Categoryid);
    if (category.length === 0) {
      return null;
    }
    return category[0];
  },

  async add(category) {
    const ids = await db("category").insert(category);
    return ids[0];
  },

  del(Categoryid) {
    return db("category").where("Categoryid", Categoryid).del();
  },

  update(CategoryId, Category) {
    return db("Category").where("CategoryId", id).update(Category);
  },

  async courses(CategoryGroupId) {
    const category = await db("category").where("CategoryGroupid", CategoryGroupid);
    if (category.length === 0) {
      return null;
    }
    return category;
  },

  async yeuthich() {
    var date = new Date();
    return db.select('category.*','categorygroup.CategorGroupname','users.Dislayname','discount.value')
    .from('category')
    .leftJoin('categorygroup','category.CategoryGroupid', 'categorygroup.CategoryGroupid')
    .leftJoin('users','users.Usersid', 'category.Teacherid')
    .leftJoin('discount', function() {
        this.on('discount.Categoryid', '=', 'category.Categoryid')
        this.andOn('discount.Isactive', '=', 1)
        this.andOn(date,'>=', 'discount.Fromdate')
        this.andOn(date,'<=', 'discount.Todate')
    })
    .where('category.Isactive',true)
    .limit(5)
    .orderBy("Quanlike","desc");
  },

  async luotxem() {
    var date = new Date();
    return db.select('category.*','categorygroup.CategorGroupname','users.Dislayname','discount.value')
    .from('category')
    .leftJoin('categorygroup','category.CategoryGroupid', 'categorygroup.CategoryGroupid')
    .leftJoin('users','users.Usersid', 'category.Teacherid')
    .leftJoin('discount', function() {
        this.on('discount.Categoryid', '=', 'category.Categoryid')
        this.andOn('discount.Isactive', '=', 1)
        this.andOn(date,'>=', 'discount.Fromdate')
        this.andOn(date,'<=', 'discount.Todate')
    })
    .where('category.Isactive',true)
    .limit(5)
    .orderBy("Quanlike","desc");
  },

  async moinhat() {
    var date = new Date();
    return db.select('category.*','categorygroup.CategorGroupname','users.Dislayname','discount.value')
    .from('category')
    .leftJoin('categorygroup','category.CategoryGroupid', 'categorygroup.CategoryGroupid')
    .leftJoin('users','users.Usersid', 'category.Teacherid')
    .leftJoin('discount', function() {
        this.on('discount.Categoryid', '=', 'category.Categoryid')
        this.andOn('discount.Isactive', '=', 1)
        this.andOn(date,'>=', 'discount.Fromdate')
        this.andOn(date,'<=', 'discount.Todate')
    })
    .where('category.Isactive',true)
    .limit(10)
    .orderBy("Created_at","desc");
  },

  async dangky() {
    var date = new Date();
    return db.select('category.*','categorygroup.CategorGroupname','users.Dislayname','discount.value')
    .from('category')
    .leftJoin('categorygroup','category.CategoryGroupid', 'categorygroup.CategoryGroupid')
    .leftJoin('users','users.Usersid', 'category.Teacherid')
    .leftJoin('discount', function() {
        this.on('discount.Categoryid', '=', 'category.Categoryid')
        this.andOn('discount.Isactive', '=', 1)
        this.andOn(date,'>=', 'discount.Fromdate')
        this.andOn(date,'<=', 'discount.Todate')
    })
    .where('category.Isactive',true)
    .limit(10)
    .orderBy("Quanres","desc");
  }
};
