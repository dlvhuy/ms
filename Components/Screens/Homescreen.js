import {View, StyleSheet,StatusBar, ScrollView } from "react-native"
import Header from "../Header_Bottom/Header"
import ListPost from "../Lists/ListPost"
import Bottom from "../Header_Bottom/Bottom"
import { useContext, useEffect } from "react"
import { AllPosts,TestHub } from "../../Apis/FetchConnection/Posts/AllPosts"
import { useIsFocused } from "@react-navigation/native"
import { memo } from "react";
function HomeScreen()
{   
    const isFocused = useIsFocused();
    useEffect(() =>{
        if(isFocused)
        {
            AllPosts()
        }
    },[isFocused])
    return(
        <View style={styleHomeScreen.containerHomeScreen}>
                <Header IsMainHeader={true}/>
                    <ListPost />
                <Bottom/>
        </View>
    )
}

export default memo(HomeScreen)
const styleHomeScreen = StyleSheet.create({
    containerHomeScreen: {
        flex:1,
        justifyContent:"center",
        backgroundColor:"white",
        marginTop:StatusBar.currentHeight,
    },
})