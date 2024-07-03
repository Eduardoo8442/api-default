import { Server as SocketIOServer, ServerOptions } from 'socket.io';
import app from '../../app';
import * as dotenv from 'dotenv';
dotenv.config();

class SocketApp {
    private static io: SocketIOServer | null = null;

    constructor() {}

    getInstance(): SocketIOServer {
        if (SocketApp.io) return SocketApp.io;
        
        const server = app.initInstance().server;

        const options: Partial<ServerOptions> = {
            cors: {
                origin: process.env.FRONTEND,
                methods: ["GET", "POST"]
            }
        };

        SocketApp.io = new SocketIOServer(server, options);
        
        return SocketApp.io;
    }
}
export default SocketApp;
