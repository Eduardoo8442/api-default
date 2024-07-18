import { FastifyInstance, FastifyReply } from 'fastify';
import multerInstance from '../../services/multer/services.multer';

class ImageRoute {
  constructor(private readonly instance: FastifyInstance) {}

  public initConnection(): void {
    this.instance.post('/upload', { preHandler: multerInstance.single('file') }, async (request: any, reply: FastifyReply) => {
      try {
        if (!request.file) {
          return reply.status(400).send('Nenhum arquivo foi enviado.');
        }

        const filePath = request.file.path;
        if (filePath) {
          const imageLink = `${process.env.URL}/uploads/${filePath.replace('uploads/', '')}`;
          reply.status(200).send({ imageLink });
        }
      } catch (error) {
        console.error('Erro ao processar upload:', error);
        reply.status(500).send('Erro ao processar upload.');
      }
    });
  }
}

export default ImageRoute;
