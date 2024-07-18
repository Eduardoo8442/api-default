import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import multerInstance from "../../services/multer/services.multer";


class ImageRoute {
constructor(private readonly instance: FastifyInstance) {}

public initConnection(instance: FastifyInstance): void {
    instance.get('/upload',  { preHandler: multerInstance.single('file') }, async (request: FastifyRequest, reply: FastifyReply) => {
        if (!request.file) {
            return reply.status(400).send('Nenhum arquivo foi enviado.');
          }
            const filePath = request.file.path;
            if(filePath) {
                const imageLink = `${process.env.URL}/uploads/${filePath.replace('uploads/', '')}`;
                reply.status(200).send({ imageLink });
            }
    });
}
}
export default ImageRoute;
