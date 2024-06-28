import Fastify, { FastifyInstance} from 'fastify';

class App {
    private static app: FastifyInstance | null = null;

    public initInstance(): FastifyInstance {
        if(App.app) return App.app; 
        App.app = Fastify({ logger: true });
        return App.app;
    }
    public async initServer(): Promise<void> {
        if(!App.app) return;
        try {
            await App.app.listen({ port: 3000 });
            console.log(`Servidor está rodando em http://localhost:3000`);
        } catch (err) {
            console.log(err)
            process.exit(1);
        }
    }
}
const app = new App();

export default app;