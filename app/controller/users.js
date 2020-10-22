'use strict';
const Controller = require('egg').Controller;
class UsersController extends Controller {
  async signin() {
    const { ctx, app } = this;
    const result = await ctx.service.users.signin(ctx.request.body);
    console.log('result', result);
    if (result) {
      const token = app.jwt.sign({
        name: result.username,
        id: result.id,
      }, app.config.jwt.secret);


      ctx.body = {
        code: 200,
        message: '登录成功',
        token,
      };

    } else {
      ctx.body = {
        status: 500,
        errMsg: '登录失败',
      };

    }
  }
}
module.exports = UsersController;
