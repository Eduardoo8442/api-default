import { Socket, Server } from "socket.io";
class JoinedUser {
    constructor(private readonly socket: Socket, private readonly io: Server) {}

    public initConnection(): void {
        this.socket.on('joinedUser', ({ name }: {name: string}) => {
           if(name) {
            this.io.emit('joinedUserSendClient',({ name }));
           }
        });
    }
}
export default JoinedUser;