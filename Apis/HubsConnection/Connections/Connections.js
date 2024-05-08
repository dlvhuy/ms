import { connection } from "../Hubs"
export const startConnection = async () =>{
    
    await connection.start()

} 