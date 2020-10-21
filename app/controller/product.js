
'use strict';

const Controller = require('egg').Controller;

class ProductControll extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'product-index';
  }
  async detail() {
    const { ctx } = this;
    console.log(ctx.query);
    ctx.body = `id=${ctx.query.id} name=${ctx.query.name}`;
  }
  async detail2() {
    const { ctx } = this;
    console.log(ctx.params);
    ctx.body = `id=${ctx.params.id} name=${ctx.params.name}`;
  }
  async productadd() {
    const { ctx } = this;
    console.log(ctx.request.body);
    const { name, age } = ctx.request.body;
    ctx.body = {
      message: '添加成功',
      name,
      age,
    };
  }
  async productput() {
    const { ctx } = this;
    console.log(ctx.params);
    console.log(ctx.request.body);
    const { id } = ctx.params;
    const { name, age } = ctx.request.body;
    ctx.body = {
      message: '修改成功',
      id,
      name,
      age,
    };
  }
  async productdel() {
    const { ctx } = this;
    console.log(ctx.params);

    const { id } = ctx.params;

    ctx.body = {
      message: '删除成功',
      id,

    };
  }
}

module.exports = ProductControll;
