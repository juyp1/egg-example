
'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const ProjectBrand = app.model.define('p_project_brand', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    branname: STRING(255),

    projectid: INTEGER,

  });
  return ProjectBrand;
};
