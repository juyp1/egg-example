'use strict';
const Controller = require('egg').Controller;
const moment = require('moment');
const utility = require('utility');// 密码加密
/**
* @apiGroup 用户管理
*/
class UsersController extends Controller {
  /**
 * @api {post} users/signin 用户登录
 * @apiName 用户登录
 * @apiGroup 用户管理
 * @apiVersion  1.0.0
 * @apiParam {string} uemail 用户名
 *  @apiParam {string} upass 密码
   */

  async signin() {
    const { ctx, app } = this;
    const data = {
      uemail: ctx.request.body.uemail,
      upass: utility.md5(ctx.request.body.upass),
    };
    const result = await ctx.service.users.signin(data);

    if (result) {

      const token = app.jwt.sign({
        uemail: result[0].uemail,
        uname: result[0].uname,
        id: result[0].id,
      }, app.config.jwt.secret);

      app.redis.set(ctx.request.body.uemail, token); // 把token存入redis

      ctx.body = {
        code: 200,
        message: '登录成功',
        info: {
          uemail: result[0].uemail,
          uname: result[0].uname,
          token,
        },
      };

    } else {
      ctx.body = {
        status: 500,
        errMsg: '登录失败',
      };

    }
  }

  /**
 * @api {post} users/uregister 用户注册
 * @apiName 用户注册
 * @apiGroup 用户管理
 * @apiVersion  1.0.0
 * @apiParam {string} uemail 用户名
 * @apiParam {string} upass 密码
 * @apiParam {string}  uname 真实姓名
   */
  async uregister() {
    const { ctx } = this;
    const data = {
      uemail: ctx.request.body.uemail,
      upass: utility.md5(ctx.request.body.upass),
      uname: ctx.request.body.uname,
      createtime: moment().format('YYYY-MM-DD HH:mm:ss'),
      status: 0,
      avatar: '',
    };
    const result = await ctx.service.users.uregister(data);
    if (result) {
      ctx.body = {
        code: 200,
        message: '注册成功',
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '注册失败,用户已存在',
      };

    }
  }
  /**
 * @api {post} users/uputuInfo 用户信息修改
 * @apiName 用户信息修改
 * @apiGroup 用户管理
 * @apiVersion  1.0.0
 * @apiParam {string} uname 真实姓名
 * @apiParam {string} upass 新的密码
 * @apiParam {string}  avatar 头像
   */
  async uputuInfo() {
    const { ctx, app } = this;
    const token = ctx.request.header.authorization.substring(7);
    ctx.state.userinfo = await app.jwt.verify(token, app.config.jwt.secret);
    const data = {
      id: ctx.state.userinfo.id,
      upass: utility.md5(ctx.request.body.upass),
      uname: ctx.request.body.uname,
      avatar: ctx.request.body.avatar,
    };
    const result = await ctx.service.users.putuInfo(data);
    if (result) {
      ctx.body = {
        code: 200,
        message: '修改成功',
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '修改失败',
      };

    }
  }

}
module.exports = UsersController;
