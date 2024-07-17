
import multer from 'fastify-multer';
import path from 'path';

class MulterStorage {
  static getStorage() {
    return multer.diskStorage({
      destination: function (req, file, cb) {
          cb(null, 'src/uploads/');
      },
      filename: function (req, file, cb) {
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
      fileFilter: function (req, file, cb) {
          if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
              return cb(new Error('Apenas imagens são permitidas!'));
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