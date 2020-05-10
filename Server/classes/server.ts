
import express from 'express';
import socketIO from 'socket.io';
import http from 'http';
import { SERVER_PORT } from '../global/environment';
import * as socket from '../sockets/socket';

export default class Server {


    private static _instance: Server;

    public app: express.Application;
    public port: number;
    public io: socketIO.Server;

    private _httpServer: http.Server;

    private constructor() {
        this.app = express();
        this.port = SERVER_PORT;

        this._httpServer = new http.Server(this.app)

        this.io = socketIO(this._httpServer);

        this.escucharSockets();
    }

    public static get instance() {
        return this._instance || (this._instance = new this())
    }

    private escucharSockets() {
        console.log("Escuchando");

        this.io.on('connection', cliente => {

            socket.conectarClientes(cliente, this.io);

            socket.configurarUsuario(cliente, this.io);

            socket.obtenerUsuarios(cliente, this.io);

            socket.mensaje(cliente, this.io);

            socket.desconectar(cliente, this.io);
        })
    }

    start(callback: any) {
        this._httpServer.listen(this.port, callback);
    }


}