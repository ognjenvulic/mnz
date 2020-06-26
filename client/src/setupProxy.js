const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );

  app.use(
    '/auth/*',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );

  // app.use(
  //   '/posts',
  //   createProxyMiddleware({
  //     target: 'http://localhost:3000',
  //     changeOrigin: true,
  //   })
  // )
};