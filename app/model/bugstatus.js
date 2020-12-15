
'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;
  const bugStatus = app.model.define('p_bug_status', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING(255),
  });
  return bugStatus;
};
