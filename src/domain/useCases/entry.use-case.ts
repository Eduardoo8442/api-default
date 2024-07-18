import { FastifyRequest, FastifyReply } from "fastify";
import GetUsers from "../../services/models/TableSchema";

interface UserRequestBody {
    name: string;
}

class Entry {
    static async executeUseCase(request: FastifyRequest<{ Body: UserRequestBody }>, reply: FastifyReply): Promise<void> {
        try {
            const { name } = request.body;

            const newUser = new GetUsers({ name });

            const result = await newUser.save();

            console.log('Um novo usuário entrou no chat!', result);
            return reply.status(200).send({ response: 'Usuário salvo.' });
        } catch (error) {
            console.error('Erro ao salvar usuário:', error);
            return reply.status(400).send({ response: 'Erro ao salvar usuário.' });
        }
    }
}

export default Entry;
