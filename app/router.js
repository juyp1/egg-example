'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/product', controller.product.index);
  router.get('/product/detail', controller.product.detail);
  router.get('/product/detail2/:id/:name', controller.product.detail2);
  router.post('/product/add', controller.product.productadd);
  router.put('/product/put/:id', controller.product.productput);
  router.delete('/product/del/:id', controller.product.productdel);
  router.post('/article/add', controller.article.create);
  router.get('/article/list', controller.article.list);
  router.get('/article/detail/:id', controller.article.detail);
};
