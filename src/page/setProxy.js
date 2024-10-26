const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            target: "http://34.64.38.76:8000", // 실제 서버 주소
            changeOrigin: true,
        })
    );
};
