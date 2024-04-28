import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr"
import { View } from "react-native";

export default function HubConnection()
{
    const connected = async(message) =>
    {

        try{
            const connection = new HubConnectionBuilder()
            .withUrl("https://localhost:7265/post-hub")
            .configureLogging(LogLevel.Information)
            .build()

            connection.on("ReceiveMessage",(post) =>{
                console.log(post)
            });

            await connection.start();
            await connection.invoke("AddPostHub","hellowotl")
        }
        catch(e)
        {
            console.log(e)
        }
    }

    return (
            <View></View>
    )
}