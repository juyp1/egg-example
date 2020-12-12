'use strict';
const Service = require('egg').Service;

class NewsService extends Service {
  async create(data) {
    const { app } = this;
    try {
      const result = await app.mysql.insert('news', data);
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

}
module.exports = NewsService;
