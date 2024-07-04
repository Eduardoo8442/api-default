//o index vai conter o connection do socket que vai importar os outros como socket.on
import SocketApp from "../../services/SocketIO/socket.services";
import joinedUser from "./joinedUser.socket";
import popMessage from "./popMessage.socket";
import saveName from "./saveName.socket";
import sendMessage from "./sendMessage.socket";
const io = new SocketApp().getInstance();
export default function socketsInit(): void {
    io.on('connection', (socket) => {
         new joinedUser(socket, io).initConnection();
         new popMessage(socket, io).initConnection();
         new saveName(socket).initConnection();
         new sendMessage(socket, io).initConnection();
    });
}