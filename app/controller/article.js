'use strict';
const Controller = require('egg').Controller;
const moment = require('moment');
class ArticleController extends Controller {
  async create() {
    const { ctx } = this;
    const data = {
      ...ctx.request.body,
      createTime: moment().format('YYYY-MM-DD HH:mm:ss'),
    };
    const result = await ctx.service.article.create(data);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '发布文章失败',
      };

    }

  }
  async list() {
    const { ctx } = this;
    const result = await ctx.service.article.list();
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '查询失败',
      };

    }
  }
  async detail() {
    const { ctx } = this;
    const result = await ctx.service.article.detail(ctx.params.id);
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '查询失败',
      };

    }
  }
  async articleunion() {
    const { ctx } = this;
    const result = await this.service.article.articleunion();
    if (result) {
      ctx.body = {
        status: 200,
        data: result,
      };
    } else {
      ctx.body = {
        status: 500,
        errMsg: '查询失败',
      };
    }
  }

}


module.exports = ArticleController;
