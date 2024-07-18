import multer from 'fastify-multer';
import path from 'path';

class MulterStorage {
  static getStorage() {
    return multer.diskStorage({
      destination: (req, file, cb: (error: Error | null, destination: string) => void): void => {
        cb(null, 'src/uploads/');
      },
      filename: (req, file, cb: (error: Error | null, filename: string) => void): void => {
        const ext = path.extname(file.originalname);
        const timestamp = Date.now();
        cb(null, `${file.fieldname}-${timestamp}${ext}`);
      }
    });
  }
}

class MulterConfig {
  static getUpload() {
    return multer({
      storage: MulterStorage.getStorage(),
      fileFilter: (req, file, cb: (error: Error | null, acceptFile: boolean) => void): void => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
          return cb(new Error('Apenas imagens são permitidas!'), false);
        }
        cb(null, true);
      },
      limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
      }
    });
  }
}

const multerInstance = MulterConfig.getUpload();
export default multerInstance;
