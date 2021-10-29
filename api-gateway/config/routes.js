module.exports = [
  // BOOK-SERVICES ROUTES
  {
    url: '/book',
    auth: false,
    proxy: {
      target: "http://localhost:3001",
      changeOrigin: true,
      logLevel: 'debug',
      pathRewrite: {
        [`^/book`]: '',
      },
    }
  },
  // VIDEO-SERVICES ROUTES
  {
    url: '/video',
    auth: true,
    proxy: {
      target: "http://localhost:3002",
      changeOrigin: true,
      logLevel: 'debug',
      pathRewrite: {
        [`^/video`]: '',
      },
    }
  }
]