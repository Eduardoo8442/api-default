import { Socket, Server } from "socket.io";
import randomIdMessage from "../../domain/functions/randomIdMessage";
class sendMessage {
    constructor(private readonly socket: Socket, private readonly io: Server) {}

    public initConnection(): void {
        this.socket.on('sendMessage', ({name, message, image, imageMessage}: {name: string, message: string, image: any, imageMessage: string}) => {
            if(!name.trim() || !message.trim() && imageMessage === null) return;
            const idMessage = randomIdMessage(12);
            this.io.emit('receive', { name, message, image, imageMessage, idMessage });
        });
    }
}
export default sendMessage;