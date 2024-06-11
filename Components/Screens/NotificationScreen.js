import { View,StyleSheet,StatusBar } from "react-native"
import ListNotification from "../Lists/ListNotification"
import Header from "../Header_Bottom/Header"

export default function NotificationScreen()
{
    return(
        <View style={styleNotificationScreen.ContainerNotificationScreen}>
            <ListNotification ></ListNotification>
        </View>
    )
}
const styleNotificationScreen = StyleSheet.create({
    ContainerNotificationScreen:{
        flex:1,
        flexDirection:"column",
        justifyContent:"flex-end",
        
    }
})