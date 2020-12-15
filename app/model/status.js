
'use strict';

module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const Status = app.model.define('u_status', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    statusname: STRING(50),
    status: { type: INTEGER, defaultValue: 0 },
  });
  return Status;
};
