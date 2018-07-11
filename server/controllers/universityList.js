const DB = require('../utils/db.js')
module.exports = {
  //获取整个高校列表
  list: async ctx => {
    ctx.state.data = await DB.query("SELECT * FROM university_list;")
  },

  info: async ctx => {
    let uName = ctx.params.name
    let university

    if (isNaN(uName)) {
      university = (await DB.query('select * from university where university.name = ?', [uName]))[0]
    } else {
      university = {}
    }

    ctx.state.data = university

  }
}