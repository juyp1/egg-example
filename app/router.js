'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  app.beforeStart(async () => {
    await app.model.sync({ alert: true }); // force  false 为不覆盖 true会删除再创建; alter true可以 添加或删除字段;
  });
  router.get('/', jwt, controller.home.index);
  // router.get('/product', controller.product.index);
  // router.get('/product/detail', controller.product.detail);
  // router.get('/product/detail2/:id/:name', controller.product.detail2);
  // router.post('/product/add', controller.product.productadd);
  // router.put('/product/put/:id', controller.product.productput);
  // router.delete('/product/del/:id', controller.product.productdel);
  // router.post('/article/add', controller.article.create);
  // router.get('/article/list', controller.article.list);
  // router.get('/article/detail/:id', controller.article.detail);
  router.post('/users/signin', controller.users.signin);
  router.post('/users/uregister', controller.users.uregister);
  router.post('/users/uputinfo', jwt, controller.users.uputuInfo);
  router.post('/comm/upload/img', jwt, controller.comm.uploadimg);
  router.post('/prject/add', jwt, controller.project.add);
  // router.get('/article/union', controller.article.articleunion);
  // router.post('/news/create', controller.news.add);
};
