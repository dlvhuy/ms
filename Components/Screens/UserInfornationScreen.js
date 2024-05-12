import {View, StyleSheet,StatusBar, ScrollView } from "react-native"
import Header from "../Header_Bottom/Header"
import ListPost from "../Lists/ListPost"
import UserInfomation from "../UserInfomation/UserInfomation"

export default function UserInformationScreen()
{
    return(
        <View style={styleHomeScreen.containerHomeScreen}>
            <Header IsMainHeader={false}/>
            <ScrollView>
                <UserInfomation/>
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