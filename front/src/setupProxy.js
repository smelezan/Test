const { createProxyMiddleware } = require('http-proxy-middleware');

const TaskApiAddress = process.env.REACT_APP_TASKADDRESS || "localhost";
const TestApiAddress = process.env.REACT_APP_TESTADDRESS || "localhost";

console.log(TaskApiAddress)
console.log(TestApiAddress)

module.exports = function(app){
    app.use(
        createProxyMiddleware(
            '/Tasks', 
            { 
                target: `http://${TaskApiAddress}:5000`, 
                changeOrigin:true,
                secure:false ,
                pathRewrite: { "^/Tasks": "" }
            }
        )
    );
    app.use(
        createProxyMiddleware(
            '/Issues', 
            { 
                target: `http://${TestApiAddress}:4000`, 
                changeOrigin:true,
                secure:false ,
                pathRewrite: { "^/Issues": "" }
            }
        )
    );
}