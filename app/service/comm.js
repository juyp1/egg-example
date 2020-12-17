
'use strict';

const mkdirp = require('mkdirp');
const path = require('path');
const sd = require('silly-datetime');
const Service = require('egg').Service;

class CommService extends Service {
  async uploadimg(filename) {
    try {
      // 1.获取当前日期
      const day = sd.format(new Date(), 'YYYYMMDD');
      // 2.创建图片保存的路径
      const dir = path.join(this.config.uploadDir, day);
      await mkdirp(dir); // 不存在就创建目录
      const date = Date.now(); // 毫秒
      const uploadDir = path.join(dir, date + path.extname(filename));
      return {
        uploadDir,
        saveDir: this.ctx.origin + uploadDir.slice(3).replace(/\\/g, '/'),
      };
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  // 全部人员信息
  async userlist() {
    const { app } = this;
    try {
      const result = await app.mysql.query('SELECT uemail,uname,avatar FROM u_users WHERE status=0');
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

}

module.exports = CommService;
