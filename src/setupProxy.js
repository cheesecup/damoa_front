const { createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function(app){
    app.use(
        "/api",
        createProxyMiddleware({
            target:"http://13.124.89.93:8080",
            changeOrigin: true,
        })
    );
}