import { createContext , useState , useEffect} from "react";
import { useAuthContex } from "./authContext";
import io from 'socket.io-client';

export const SocketContext = createContext();

export const SocketContextProvider = ({children}) => {
    const [Socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const {authUser} = useAuthContex();

    useEffect(() => {
        if(authUser){
            const socket = io('http://localhost:5000');
            setSocket(socket);
            return () => {
                socket.close();
            }
        }else {
            setSocket(null);
            setSocket(null);
        }
    }
    , [])
    return (
        <SocketContext.Provider value={{Socket , onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}
