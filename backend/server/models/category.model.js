const db = require("../utils/db");

module.exports = {
  all() {
    return db("category").where("isActive",true);
  },
  allAdmin() {
    // return db("category").leftJoin('categorygroup', 'categorygroup.CategoryGroupId', '=', 'category.CategoryId')
    return db({ a: 'category', b: 'categorygroup', c: 'users' })
    .select('a.*',{
      categoryImage: 'a.Image',
      categorygroupImage: 'b.Image',
      NameTeacher: 'c.DislayName',
      CategoryGroupName:'b.CategoryGroupName'
    })
    .whereRaw('?? = ?? and ?? = ?? ', ['a.CategoryGroupId', 'b.CategoryGroupId','c.UsersID','a.TeacherID'])

  },
  async single(CategoryId) {
     const category = await db({ a: 'category', b: 'categorygroup'})
    .select('a.*',{
      categoryImage: 'a.Image',
      categorygroupImage: 'b.Image',
      CategoryGroupName:'b.CategoryGroupName'
    })
    .whereRaw('?? = ?? ', ['a.CategoryGroupId', 'b.CategoryGroupId'])
    .where('a.CategoryId', CategoryId);
    if (category.length === 0) {
      return null;
    }
    return category[0]; 
  },
  async ByUserID(usersid) {
      
    return db({ a: 'category', b: 'categorygroup', c: 'users' })
    .select('a.*',{
      categoryImage: 'a.Image',
      categorygroupImage: 'b.Image',
      NameTeacher: 'c.DislayName',
      CategoryGroupName:'b.CategoryGroupName'
    })
    .whereRaw('?? = ?? and ?? = ?? ', ['a.CategoryGroupId', 'b.CategoryGroupId','c.UsersID','a.TeacherID'])
    .where('c.usersid', usersid);
  },
  async add(category) {
    const ids = await db("category").insert(category);
    return ids[0];
  },

  del(CategoryId) {
    return db("category").where("CategoryId", CategoryId).del();
  },

  update(CategoryId, Category) {
    return db("Category").where("CategoryId", CategoryId).update(Category);
  },

  async courses(CategoryGroupId) {
    const category = await db("category").where("CategoryGroupId", CategoryGroupId);
    if (category.length === 0) {
      return null;
    }
    return category;
  },

  updateProductView(id, quanview) {
    return db("product").where("ProductId", id).update('Viewer', quanview);
  },

  // Chi tiết từng khóa học
  async getCategory(CategoryId, UsersId) {
    var date = new Date();
    const category = await db.select(db.raw(` C.*
                                            , P.*
                                            , CG.CategoryGroupName
                                            , U.Image AS Ava
                                            , U.DislayName
                                            , D.Value
                                            , CASE WHEN RD.USERSID IS NULL THEN 0 ELSE 1 END AS IsRes
                                            , SUM(CASE WHEN RAD.RATEVALUE = 1 THEN 1 ELSE 0 END) AS Rate1
                                            , SUM(CASE WHEN RAD.RATEVALUE = 2 THEN 1 ELSE 0 END) AS Rate2
                                            , SUM(CASE WHEN RAD.RATEVALUE = 3 THEN 1 ELSE 0 END) AS Rate3
                                            , SUM(CASE WHEN RAD.RATEVALUE = 4 THEN 1 ELSE 0 END) AS Rate4
                                            , SUM(CASE WHEN RAD.RATEVALUE = 5 THEN 1 ELSE 0 END) AS Rate5
                                            , COUNT(RAD.ID) AS TotalRate
                                            `))
                              .from('CATEGORY AS C')
                              .leftJoin(db.raw(`CATEGORYGROUP AS CG ON C.CATEGORYGROUPID = CG.CATEGORYGROUPID`))
                              .leftJoin(db.raw(`USERS AS U ON C.TEACHERID = U.USERSID`))
                              .leftJoin(db.raw(`DISCOUNT AS D ON (C.CATEGORYID = D.CATEGORYID
                                                              AND D.ISACTIVE = TRUE
                                                              AND D.FROMDATE <= ?
                                                              AND D.ENDDATE >= ?)`,  [date,date] ))
                              .leftJoin(db.raw(`RESDETAIL AS RD ON C.CATEGORYID = RD.CATEGORYID
                                                                AND RD.USERSID = ?
                                                                AND RD.ISACTIVE = TRUE`, [ UsersId]))
                              .leftJoin(db.raw(`PRODUCT AS P ON C.CATEGORYID = P.CATEGORYID
                                                              AND P.ISACTIVE = TRUE`))
                              .leftJoin(db.raw(`RATEDETAIL AS RAD ON RAD.CATEGORYID = P.CATEGORYID`))
                              .whereRaw('C.ISACTIVE = TRUE')
                              .andWhereRaw(`C.CATEGORYID = ?`, [CategoryId] )
                              .groupBy(`C.CATEGORYID`, `P.PRODUCTID`)
                              .orderBy(`P.NUMBERNO`)    
    if (category.length === 0) {
      return null;
    }
    return category;
  },

  // Hàm truy vấn tìm kiếm khóa học có sắp xếp. //Home
  async showCategoryOrderBy(orderbyType, limit) {
    var date = new Date();
    const categoryList =  db.select(db.raw(`C.*
                                      , CG.CategoryGroupName
                                      , U.DislayName
                                      , D.Value
                                      , CASE WHEN V.TOTALVIEW IS NULL THEN 0 ELSE V.TOTALVIEW END AS TotalView`))
                        .from('CATEGORY AS C')
                        .leftJoin(db.raw(`CATEGORYGROUP AS CG ON C.CATEGORYGROUPID = CG.CATEGORYGROUPID`))
                        .leftJoin(db.raw(`USERS AS U ON C.TEACHERID = U.USERSID`))
                        .leftJoin(db.raw(`DISCOUNT AS D ON (D.CATEGORYID = C.CATEGORYID
                                                        AND D.ISACTIVE = TRUE
                                                        AND D.FROMDATE <= ?
                                                        AND D.ENDDATE >= ?)`,  [date,date] ))
                        .leftJoin(db.raw(`(SELECT CATEGORYID, SUM(VIEWER) AS TOTALVIEW
                                           FROM PRODUCT
                                           WHERE ISACTIVE = TRUE) AS V ON V.CATEGORYID = C.CATEGORYID`))
                        .whereRaw('C.ISACTIVE = ?', true)
                        .orderBy(orderbyType, 'DESC')
                        .limit(limit);
    if (categoryList.length === 0) {
      return null;
    }
    return categoryList;
  },

  // Hàm truy vấn các khóa học thuộc lĩnh vực //Courses
  async getCategoryByGroupId(CategoryGroupId) {
    var date = new Date();
    const categoryList = await db.select(db.raw(`C.*
                                          ,CG.CategoryGroupName
                                          ,U.DislayName
                                          ,D.Value`))
                              .from('CATEGORY AS C')
                              .leftJoin(db.raw(`CATEGORYGROUP AS CG ON C.CATEGORYGROUPID = CG.CATEGORYGROUPID`))
                              .leftJoin(db.raw(`USERS AS U ON C.TEACHERID = U.USERSID`))
                              .leftJoin(db.raw(`DISCOUNT AS D ON (D.CATEGORYID = C.CATEGORYID
                                                              AND D.ISACTIVE = TRUE
                                                              AND D.FROMDATE <= ?
                                                              AND D.ENDDATE >= ?)`,  [date,date] ))
                              .whereRaw('C.ISACTIVE = ?', true)
                              .andWhereRaw('C.CATEGORYGROUPID = ?', CategoryGroupId)
    if (categoryList.length === 0) {
      return null;
    }
    return categoryList;
  },

    // Hàm truy vấn các khóa học thuộc lĩnh vực //Courses
  async getCategoryAllGroup() {
    var date = new Date();
    const categoryList = await db.select(db.raw(`C.*
                                          ,CG.CategoryGroupName
                                          ,U.DislayName
                                          ,D.Value`))
                              .from('CATEGORY AS C')
                              .leftJoin(db.raw(`CATEGORYGROUP AS CG ON C.CATEGORYGROUPID = CG.CATEGORYGROUPID`))
                              .leftJoin(db.raw(`USERS AS U ON C.TEACHERID = U.USERSID`))
                              .leftJoin(db.raw(`DISCOUNT AS D ON (D.CATEGORYID = C.CATEGORYID
                                                              AND D.ISACTIVE = TRUE
                                                              AND D.FROMDATE <= ?
                                                              AND D.ENDDATE >= ?)`,  [date,date] ))
                              .whereRaw('C.ISACTIVE = ?', true)
    if (categoryList.length === 0) {
      return null;
    }
    return categoryList;
  },

};
