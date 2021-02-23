const db = require("../utils/db");

module.exports = {
  all() {
    return db("category").where("Isactive",true);
  },
  allAdmin() {
    return db("category").leftJoin('categorygroup', 'categorygroup.CategoryGroupId', '=', 'category.CategoryId')

  },
  async single(CategoryId) {
    const category = await db("category").where("CategoryId", CategoryId);
    if (category.length === 0) {
      return null;
    }
    return category[0];
  },

  async add(category) {
    const ids = await db("category").insert(category);
    return ids[0];
  },

  del(CategoryId) {
    return db("category").where("CategoryId", CategoryId).del();
  },

  update(CategoryId, Category) {
    return db("Category").where("CategoryId", id).update(Category);
  },

  async courses(CategoryGroupId) {
    const category = await db("category").where("CategoryGroupId", CategoryGroupId);
    if (category.length === 0) {
      return null;
    }
    return category;
  },

  async yeuthich() {
    var date = new Date();
    return db.select('category.*','categorygroup.CategoryGroupName','users.DislayName','discount.value')
    .from('category')
    .leftJoin('categorygroup','category.CategoryGroupId', 'categorygroup.CategoryGroupId')
    .leftJoin('users','users.UsersId', 'category.Teacherid')
    .leftJoin('discount', function() {
        this.on('discount.CategoryId', '=', 'category.CategoryId')
        this.andOn('discount.Isactive', '=', 1)
        this.andOn(date,'>=', 'discount.Fromdate')
        this.andOn(date,'<=', 'discount.Todate')
    })
    .where('category.Isactive',true)
    .limit(5)
    .orderBy("Rate","desc");
  },

  async luotxem() {
    var date = new Date();
    return db.select('category.*','categorygroup.CategoryGroupName','users.DislayName','discount.value')
    .from('category')
    .leftJoin('categorygroup','category.CategoryGroupId', 'categorygroup.CategoryGroupId')
    .leftJoin('users','users.UsersId', 'category.Teacherid')
    .leftJoin('discount', function() {
        this.on('discount.CategoryId', '=', 'category.CategoryId')
        this.andOn('discount.Isactive', '=', 1)
        this.andOn(date,'>=', 'discount.Fromdate')
        this.andOn(date,'<=', 'discount.Todate')
    })
    .where('category.Isactive',true)
    .limit(5)
    .orderBy("Rate","desc");
  },

  async moinhat() {
    var date = new Date();
    return db.select('category.*','categorygroup.CategoryGroupName','users.DislayName','discount.value')
    .from('category')
    .leftJoin('categorygroup','category.CategoryGroupId', 'categorygroup.CategoryGroupId')
    .leftJoin('users','users.UsersId', 'category.Teacherid')
    .leftJoin('discount', function() {
        this.on('discount.CategoryId', '=', 'category.CategoryId')
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
    return db.select('category.*','categorygroup.CategoryGroupName','users.DislayName','discount.value')
    .from('category')
    .leftJoin('categorygroup','category.CategoryGroupId', 'categorygroup.CategoryGroupId')
    .leftJoin('users','users.UsersId', 'category.Teacherid')
    .leftJoin('discount', function() {
        this.on('discount.CategoryId', '=', 'category.CategoryId')
        this.andOn('discount.Isactive', '=', 1)
        this.andOn(date,'>=', 'discount.Fromdate')
        this.andOn(date,'<=', 'discount.Todate')
    })
    .where('category.Isactive',true)
    .limit(10)
    .orderBy("Quanres","desc");
  }
};
