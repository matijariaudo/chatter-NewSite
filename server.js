const express=require('express')
require('dotenv').config()
const path=require('path');

class Server{
    constructor(){
        this.app=express();
        this.middlewares();
        this.routes();
        
    }

    async middlewares(){
        this.app.use(express.json());// Configuración del rate limiter
    }
    


    routes(){
        
        this.app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, './public', 'index.html'));
        });
        this.app.use(express.static(path.join(__dirname, './public')));
        
    }

    async listen(){
        const port = process.env.PORT
        this.app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        });
    }

}



module.exports={Server}

