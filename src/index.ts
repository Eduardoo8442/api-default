import app from "./app";
import routesApplication from "./http/routes";
app.initInstance();
app.initServer();
routesApplication(app.initInstance());

