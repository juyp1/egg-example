
'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const s_users = app.model.define('u_users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    uemail: STRING(255),
    upass: STRING(255),
    uname: STRING(255),
    status: { type: INTEGER, defaultValue: 0 },
    avatar: STRING(255),
    createtime: { type: DATE, defaultValue: app.Sequelize.NOW },
  });
  return s_users;
};
