//o index vai conter o connection do socket que vai importar os outros como socket.on
import SocketApp from "../../services/SocketIO/socket.services";
import JoinedUser from "./joinedUser.socket";
import PopMessage from "./popMessage.socket";
import SaveName from "./saveName.socket";
import SendMessage from "./sendMessage.socket";
import ListUser from "./listUsers.socket";

export default function socketsInit(): void {
    const io = new SocketApp().getInstance();
    io.on('connection', (socket) => {
         new JoinedUser(socket, io).initConnection();
         new PopMessage(socket, io).initConnection();
         new SaveName(socket).initConnection();
         new SendMessage(socket, io).initConnection();
         new ListUser(socket).initConnection();
    });
}