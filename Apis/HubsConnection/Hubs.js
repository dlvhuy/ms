import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr"
import { API_URL } from "..";
import { getValueFor } from "../../expoSecure/Secure";

export const connection = new HubConnectionBuilder()
    .withUrl(`${API_URL}/post-hub`,{
        accessTokenFactory: () => getValueFor("JWT_TOKEN"),
    })
    .withAutomaticReconnect()
    .withServerTimeout(300000)
    .withKeepAliveInterval(150000)
    .configureLogging(LogLevel.Information)
    .build()








    
