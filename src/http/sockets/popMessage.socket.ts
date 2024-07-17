import { Socket, Server } from "socket.io";
class PopMessage {
    constructor(private readonly socket: Socket, private readonly io: Server) {}

    public initConnection(): void {
        this.socket.on('popMessage', ({ idMessage }: {idMessage: number}) => {
           if(idMessage) {
            this.io.emit('popMessageSendClient',({ idMessage }));
           }
        });
    }
}
export default PopMessage;