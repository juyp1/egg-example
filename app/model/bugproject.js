
'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;
  const BugProject = app.model.define('p_project_bug', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING(255),
    projectid: INTEGER,
    createuuid: INTEGER,
    createtime: { type: DATE, defaultValue: app.Sequelize.NOW },
    updatetime: { type: DATE, defaultValue: app.Sequelize.NOW },
    statusid: INTEGER,
    content: TEXT,
    imgpath: STRING(255),
    modulename: STRING(255),
  });
  return BugProject;
};
