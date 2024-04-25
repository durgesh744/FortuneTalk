import io from 'socket.io-client'
import { createContext, useContext, useMemo } from 'react'
import { getItemFromLocalStorage } from '../helper/useLocalStorage';

const SocketContext = createContext();
const getSocket = () => useContext(SocketContext)

const SocketProvider = ({ children }) => {
    // const user  =  
    const socket = useMemo(async () => io("https://chat-backend-yiwj.onrender.com", {
        withCredentials: true, transports: ["websocket"], extraHeaders: {
            // Authorization: "Bearer " + await getItemFromLocalStorage("user") ,
        }
    }),
        [])

    // console.log(user, "user")

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export { SocketProvider, getSocket }
