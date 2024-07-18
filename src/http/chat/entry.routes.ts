import { FastifyInstance } from "fastify";
import Entry from "../../domain/useCases/entry.use-case";

class EntryRoute {
constructor(private readonly instance: FastifyInstance) {}

public initConnection(): void {
    this.instance.post('/entry', Entry.executeUseCase);
}
}
export default EntryRoute;
