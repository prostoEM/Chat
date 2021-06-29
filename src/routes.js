import Chat from "./components/Chat/Chat";
import Log from "./components/Log/Log";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path:   LOGIN_ROUTE,
        Component: Log
        
    }
]

export const privateRoutes = [
    {
        path:   CHAT_ROUTE,
        Component: Chat
        
    }
]