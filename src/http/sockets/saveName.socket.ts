import { Socket } from "socket.io";
class SaveName {
    constructor(private readonly socket: Socket) {}

    public initConnection(): void {
        this.socket.on('saveName', ({ name }: {name: string}) => {
        this.socket.data.name = name;
        });
    }
}
export default SaveName;