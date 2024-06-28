import mainRoute from "./main/main.routes";
import { FastifyInstance } from "fastify";


export default function routesApplication(instance: FastifyInstance): void {
    mainRoute(instance);
}