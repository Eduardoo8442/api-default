import Fastify, { FastifyInstance} from 'fastify';

class App {
    private static app: FastifyInstance | null = null;
    private static running: boolean = false;

    public initInstance(): FastifyInstance {
        if(App.app) return App.app; 
        App.app = Fastify({ logger: true });
        return App.app;
    }
    public async initServer(): Promise<void> {
        if(!App.app) return;
        if(App.running) return;
        try {
            await App.app.listen({ port: 3000 });
            console.log(`Servidor está rodando em http://localhost:3000`);
            this.setRunning(true);
        } catch (err) {
            console.log(err)
            process.exit(1);
        }
    }
    private setRunning(value: boolean): void {
        App.running = value; 
    }
}
const app = new App();

export default app;