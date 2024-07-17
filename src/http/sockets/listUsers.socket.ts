import { Socket } from "socket.io";
import getUsers from "../../services/models/TableSchema";
class ListUser {
    constructor(private readonly socket: Socket) {}

    public initConnection(): void {
        this.socket.on('usersList', async () => {
            try {
                const data = await getUsers.find();
                this.socket.emit('receiveListUsers', { data });
            } catch(e) {
               console.log('Erro ao buscar lista de usuários. tipo:', e);
            }
        });
    }
}
export default ListUser;