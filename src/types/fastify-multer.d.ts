import 'fastify';
import { File } from 'fastify-multer/lib/interfaces';

declare module 'fastify' {
  interface FastifyRequest {
    file?: File;
  }
}

declare module 'fastify-multer' {
  import { Request, RequestHandler } from 'express';
  import { StorageEngine } from 'multer';

  interface File {
    /** Field name specified in the form */
    fieldname: string;
    /** Name of the file on the user's computer */
    originalname: string;
    /** Encoding type of the file */
    encoding: string;
    /** Mime type of the file */
    mimetype: string;
    /** Size of the file in bytes */
    size: number;
    /** The folder to which the file has been saved (DiskStorage) */
    destination: string;
    /** The name of the file within the destination (DiskStorage) */
    filename: string;
    /** Location of the uploaded file (DiskStorage) */
    path: string;
    /** A Buffer of the entire file (MemoryStorage) */
    buffer: Buffer;
  }

  interface Multer {
    (options?: MulterOptions): RequestHandler;
    diskStorage: (options: DiskStorageOptions) => StorageEngine;
  }

  interface MulterOptions {
    storage?: StorageEngine;
    limits?: {
      fieldNameSize?: number;
      fieldSize?: number;
      fields?: number;
      fileSize?: number;
      files?: number;
      parts?: number;
      headerPairs?: number;
    };
    fileFilter?: (req: Request, file: File, callback: (error: Error | null, acceptFile: boolean) => void) => void;
  }

  interface DiskStorageOptions {
    destination?: string | ((req: Request, file: File, callback: (error: Error | null, destination: string) => void) => void);
    filename?: (req: Request, file: File, callback: (error: Error | null, filename: string) => void) => void;
  }

  const multer: Multer;
  export default multer;
}