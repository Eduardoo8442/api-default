import { Socket } from "socket.io";
class saveName {
    constructor(private readonly socket: Socket) {}

    public initConnection(): void {
        this.socket.on('saveName', ({ name }: {name: string}) => {
        this.socket.data.name = name;
        });
    }
}
export default saveName;