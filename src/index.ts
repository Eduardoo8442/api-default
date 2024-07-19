import app from "./app";
import routesApplication from "./http/routes";
import socketsInit from "./http/sockets";
import database from "./database";
import FormBody from './services/formbody';
import path from "path";
const server = app.initInstance();
FormBody.initFormBody(server);
routesApplication(server);
database.initInstance();
socketsInit();
server.register(require('@fastify/static'), {
root: path.join(__dirname, 'uploads'),
prefix: '/uploads/', 
});

app.initServer();
