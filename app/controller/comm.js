'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const pump = require('mz-modules/pump');
/**
* @apiGroup 通用接口
*/
class CommController extends Controller {
  /**
 * @api {post} comm/upload/img 上传图片
 * @apiName 上传图片
 * @apiGroup 通用接口
 * @apiVersion  1.0.0
 * @apiParam {file} imgurl 图片、文件信息

   */
  async uploadimg() {
    const { ctx } = this;
    const parts = ctx.multipart({ autoFields: true });
    const files = [];
    let stream;
    while ((stream = await parts()) != null) {
      if (!stream.filename) {
        break;
      }
      const fieldname = stream.fieldname; // file表单的名字
      // 上传图片的目录
      const dir = await ctx.service.comm.uploadimg(stream.filename);
      const target = dir.uploadDir;
      const writeStream = fs.createWriteStream(target);
      await pump(stream, writeStream);
      files.push({
        [fieldname]: dir.saveDir,
      });

    }
    if (Object.keys(files).length > 0) {
      ctx.body = {
        code: 200,
        message: '图片上传成功',
        data: files,
      };
    } else {
      ctx.body = {
        code: 500,
        message: '图片上传失败',
        data: {},
      };
    }
  }
}

module.exports = CommController;
