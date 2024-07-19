import { FastifyInstance } from 'fastify';
import multerInstance from '../../services/multer/services.multer';
import * as dotenv from 'dotenv';
import ImageUseCase from '../../domain/useCases/image.use-case';
dotenv.config();
class ImageRoute {
  constructor(private readonly instance: FastifyInstance) {}

  public initConnection(): void {
    this.instance.post('/upload', { preHandler: multerInstance.single('file') }, ImageUseCase.executeUseCase);
  }
}

export default ImageRoute;
