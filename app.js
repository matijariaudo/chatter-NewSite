const { Server } = require("./server")


const init=async()=>{
    const server=new Server();
    server.listen()
}

init()