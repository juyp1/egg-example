
'use strict';

module.exports = app => {
  const { STRING, INTEGER, TEXT, DATE } = app.Sequelize;
  const Project = app.model.define('p_project', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },

    projectname: STRING(255),
    projectdesc: TEXT,
    statusid: INTEGER,
    createtime: { type: DATE, defaultValue: app.Sequelize.NOW },
    branch: STRING(50),
  });
  return Project;
};
