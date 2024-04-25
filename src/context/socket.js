import io from 'socket.io-client';
import React, { createContext, useContext, useMemo } from 'react';
import { useAuth } from './AuthContext';

const SocketContext = createContext();
const getSocket = () => useContext(SocketContext);

const SocketProvider = ({ children }) => {
    const { user } = useAuth();
    const token = user?.token?.jwt?.token;

    const createSocket = () => {
        if (token) {
            return io("http://10.0.2.2:3000/", { withCredentials: true, query: { token } });
        } else {
            // Handle case where token is not available
            return null;
        }
    };

    const socket = useMemo(createSocket, [token]);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};

export { SocketProvider, getSocket };
