
'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const ProjectModel = app.model.define('p_project_module', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    modulename: STRING(255),

    projectid: INTEGER,

  });
  return ProjectModel;
};
