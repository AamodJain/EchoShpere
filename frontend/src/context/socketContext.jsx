import { createContext , useState , useEffect , useContext} from "react";
import { useAuthContex } from "./authContext";
import io from 'socket.io-client';

export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({children}) => {
    const [Socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const {authUser} = useAuthContex();

    useEffect(() => {
        if(authUser){
            const socket = io('http://localhost:5000' , {
                query : {
                    userId : authUser._id
                }
            });
            setSocket(socket);

            socket.on('getOnlineUsers', (users) => {
                setOnlineUsers(users);
            });

            return () => {
                socket.close();
            }
        }else {
            if(Socket){
                Socket.close();
                setSocket(null);
            }
        }
    }
    , [authUser])
    return (
        <SocketContext.Provider value={{Socket , onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}
