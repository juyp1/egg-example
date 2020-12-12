'use strict';
const Controller = require('egg').Controller;
const moment = require('moment');
class NewsController extends Controller {
  async add() {

    const { ctx } = this;
    const data = {
      ...ctx.request.body,
      createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    };
    const res = await ctx.service.news.create(data);
    console.log(res);
    ctx.body = res;
  }
}

module.exports = NewsController;
