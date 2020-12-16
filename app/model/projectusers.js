
'use strict';

module.exports = app => {
  const { INTEGER } = app.Sequelize;
  const ProjectUsersModel = app.model.define('u_project', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    projectid: INTEGER,
    iscreated: INTEGER,
    uuid: INTEGER,
  });
  return ProjectUsersModel;
};
