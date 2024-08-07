const http = require("http");
const app = require("./app");
const {PORT} = require("./config/index");
const httpServer = http.createServer(app);


// // environmental variable configuration
// const PORT = envVariable.PORT;



const startServer = async() => {
    httpServer.listen(PORT, () =>{
        console.log(`server is running port: ${PORT}`);
    });
};

startServer();