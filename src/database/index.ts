import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

class Database {
    private static database: any;
    constructor(private readonly connection: any) {}
    

    public getInstance(): any {
        if(!Database.database) throw new Error('A database ainda não foi instanciada!');
        return Database.database;
    }

    public async initInstance(): Promise<void> {
        try {
            if(Database.database) {
                console.log('Servidor já conectado à database');
            } else {
                Database.database = await mongoose.connect(this.connection, {});
                console.log('Servidor conectado à database');
            }
          } catch (err) {
            console.error('Erro ao conectar à database:', err);
          }
    }
}

const database = new Database(process.env.DATABASE);
export default database;