const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://connections-api.herokuapp.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    })
  );
};
