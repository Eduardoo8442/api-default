import { FastifyInstance } from 'fastify';

function mainRoute(instance: FastifyInstance): void {
    console.log('Configurando rota principal...');
    instance.get('/', async (request, reply) => {
        console.log('Recebida requisição na rota principal.');
        return reply.status(200).send('API CARREGADA');
    });
}

export default mainRoute;