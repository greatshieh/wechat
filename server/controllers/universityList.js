const DB = require('../utils/db.js')
module.exports = {
  //获取整个高校列表
  list: async ctx => {
    ctx.state.data = await DB.query("SELECT * FROM university_list;")
  }
}