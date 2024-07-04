import { Socket, Server } from "socket.io";
class joinedUser {
    constructor(private readonly socket: Socket, private readonly io: Server) {}

    public initConnection(): void {
        this.socket.on('joinedUser', ({ name }: {name: string}) => {
           if(name) {
            this.io.emit('joinedUserSendClient',({ name }));
           }
        });
    }
}
export default joinedUser;