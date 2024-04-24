import {View, StyleSheet,StatusBar, ScrollView } from "react-native"
import Header from "../Header/Header"
import ListPost from "../Lists/ListPost"
import UserInfomation from "../UserInfomation/UserInfomation"

export default function HomeScreen()
{
    return(
        <View style={styleHomeScreen.containerHomeScreen}>
            <Header IsMainHeader={true}/>
            <ScrollView>
                <ListPost/>
            </ScrollView>
        </View>
    )
}

const styleHomeScreen = StyleSheet.create({
    containerHomeScreen: {
        
        justifyContent:"center",
        backgroundColor:"#f5f5f5",
        marginTop:StatusBar.currentHeight
    },
})