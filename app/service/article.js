
'use strict';
const Service = require('egg').Service;

class ArticleService extends Service {
  async create(data) {
    console.log('data', data);
    const { app } = this;
    try {
      const result = await app.mysql.insert('article', data);
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  async list() {
    const { app } = this;
    try {
      const result = await app.mysql.select('article');
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  async detail(id) {
    const { app } = this;
    if (!id) {
      return null;
    }
    try {
      const result = await app.mysql.get('article', { id });
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

module.exports = ArticleService;
