import { FastifyInstance } from 'fastify';

function mainRoute(instance: FastifyInstance): void {
    instance.get('/', async (request, reply) => {
        return { success: "api success" };
    });
}
export default mainRoute;