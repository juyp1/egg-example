'use strict';
const Service = require('egg').Service;

class ProjectService extends Service {
  // 登录
  async add(data) {
    const { app, ctx } = this;

    try {
      console.log(ctx.state.userinfo);
      const branchlist = data.branchs.split(',');
      const modellist = data.models.split(',');
      const userlist = data.users.split(',');
      const result = await app.mysql.query(`insert into p_project(projectname,projectdesc,statusid,createtime)
        VALUES ('${data.projectname}','${data.projectdesc}',${data.statusid},'${data.createtime}')`);
      for (let i = 0; i < branchlist.length; i++) {
        await app.mysql.query(`insert into p_project_brand(branname,projectid)values('${branchlist[i]}',${result.insertId})`);
      }
      for (let i = 0; i < modellist.length; i++) {
        await app.mysql.query(`insert into p_project_module(modulename,projectid)values('${modellist[i]}',${result.insertId})`);
      }
      for (let i = 0; i < modellist.length; i++) {
        await app.mysql.query(`insert into p_project_module(modulename,projectid)values('${modellist[i]}',${result.insertId})`);
      }
      for (let i = 0; i < userlist.length; i++) {

        await app.mysql.query(`insert into u_project(uuid,projectid,iscreated)values('${userlist[i]}',${result.insertId},${JSON.parse(userlist[i]) === ctx.state.userinfo.id ? 1 : 0})`);
      }
      return result;


    } catch (err) {
      console.log(err);
      return null;
    }
  }


}
module.exports = ProjectService;
