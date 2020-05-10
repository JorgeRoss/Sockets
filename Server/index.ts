import Server from './classes/server'
import Router from './routes/router'
import bodyParcer from 'body-parser'
import cors from 'cors'

const server = Server.instance;

server.app.use(bodyParcer.urlencoded({ extended: true }));

server.app.use(bodyParcer.json());

server.app.use(cors({ origin: true, credentials: true }));

server.app.use('/', Router);

server.start(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);    
});


