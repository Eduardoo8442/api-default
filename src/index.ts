import app from "./app";
import routesApplication from "./http/routes";
import socketsInit from "./http/sockets";
app.initInstance();
app.initServer();
routesApplication(app.initInstance());
socketsInit();
