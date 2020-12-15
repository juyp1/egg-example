
'use strict';
const moment = require('moment');
const Controller = require('egg').Controller;
/**
 * @api {post} project/add 用户信息修改
 * @apiName 用户信息修改
 * @apiGroup 用户管理
 * @apiVersion  1.0.0
 * @apiParam {string} projectname 项目名称
 * @apiParam {string} projectdesc 项目描述
 * @apiParam {int}  statusid 项目状态
 * @apiParam {Array}  branchs 项目分支
 * @apiParam {Array}  models 模块列表
 * @apiParam {Array}  users 项目组成员
   */
class ProjectController extends Controller {
  async add() {
    const { ctx, app } = this;
    const token = ctx.request.header.authorization.substring(7);
    ctx.state.userinfo = await app.jwt.verify(token, app.config.jwt.secret);
    const data = {
      projectname: ctx.request.body.projectname,
      projectdesc: ctx.request.body.projectdesc,
      createtime: moment().format('YYYY-MM-DD HH:mm:ss'),
      statusid: ctx.request.body.statusid,
      branchs: ctx.request.body.branchs,
      models: ctx.request.body.models,
      users: ctx.request.body.users,

    };
    const result = await ctx.service.project.add(data);
    if (result) {
      ctx.body = {
        code: 200,
        message: '创建成功',
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '创建失败',
      };

    }
  }
}

module.exports = ProjectController;
