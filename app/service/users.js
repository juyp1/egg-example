'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  // 登录
  async signin(params) {
    const { app } = this;

    if (!params.uemail && !params.upass) {

      return null;
    }
    try {
      const result = await app.mysql.select('u_users', { uemail: params.uemail, upass: params.upass });
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  // 注册
  async uregister(data) {
    const { app } = this;
    if (!data.upass && !data.uemail) {
      return null;
    }
    try {
      const result = await app.mysql.query(`select count(0) as count from u_users where uemail= "${data.uemail}"`);

      if (result[0].count > 0) {

        return null;
      }
      const inresult = await app.mysql.query(` INSERT into u_users (uemail,upass,uname,createtime) VALUES('${data.uemail}','${data.upass}','${data.uname}','${data.createtime}')`);
      return inresult;

    } catch (err) {
      console.log('错误', err);
      return null;
    }
  }

  async putuInfo(data) {
    const { app } = this;
    try {
      const result = await app.mysql.query(`update u_users set uname='${data.uname}',upass='${data.upass}',avatar='${data.avatar}' where id='${data.id}'`);
      return result;
    } catch (err) {
      console.log(err);
      return null;

    }
  }


}
module.exports = UserService;
