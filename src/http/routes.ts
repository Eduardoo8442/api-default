import mainRoute from "./main/main.routes";
import { FastifyInstance } from "fastify";
import ImageRoute from "./upload/image.routes";
import EntryRoute from "./chat/entry.routes";
export default function routesApplication(instance: FastifyInstance): void {
    mainRoute(instance);
    new ImageRoute(instance).initConnection();
    new EntryRoute(instance).initConnection();
}