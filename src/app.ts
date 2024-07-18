import Fastify, { FastifyInstance} from 'fastify';
import * as dotenv from 'dotenv';
import cors from './services/cors';
dotenv.config();
class App {
    private static app: FastifyInstance | null = null;
    private static running: boolean = false;

    public initInstance(): FastifyInstance {
        App.app = Fastify({ logger: true });
        return App.app;
    }
    public async initServer(): Promise<void> {
        if(!App.app) return;
        if(App.running) return;
        try { 
            const port: number = Number(process.env.PORT) || 3000;
            cors.initCors(App.app);
            await App.app.listen({ port });
            console.log(`Servidor está rodando em http://localhost:${port}`);
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