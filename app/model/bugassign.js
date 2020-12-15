
'use strict';

module.exports = app => {
  const { INTEGER } = app.Sequelize;
  const Bugassaign = app.model.define('p_project_bug_assign', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    bugid: INTEGER,
    assignuuid: INTEGER,
    isassig: INTEGER,

  });
  return Bugassaign;
};
