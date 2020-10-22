'use strict';
const Service = require('egg').Service;

class UserService extends Service {

  async signin(params) {
    const { app } = this;

    if (!params.account && !params.password) {

      return null;
    }
    try {
      const result = await app.mysql.select('users', { account: params.account, password: params.password });
      console.log(result);
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
module.exports = UserService;
