import app from './app.js';
import {sequelize} from './database/database.js'
import { createRequire } from 'module';
import * as fs from 'fs';
const require = createRequire(import.meta.url);

const port = 3000

function callHTML(){
    let http = require('http');
    let handleRequest = (request, response) => {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.readFile('../SSO/src/html/index.html', null, function (error, data) {
            if (error) {
                console.log("ENTRANDO Al PRIMER IF: ",error)
                response.writeHead(404);
                respone.write('Whoops! File not found!');
            } else {
                console.log(data)
                response.write(data);
            }
            response.end();
        });
    
    }
    http.createServer(handleRequest).listen(8000);

}

async function main(){
    callHTML()
    try {
        //await sequelize.authenticate();
        await sequelize.sync({ force:false });
        app.listen(port)
        console.log('Connection has been established successfully.');
        
        console.log("Server starts on port ", port)
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    
}
main();