import {View, StyleSheet,StatusBar, ScrollView } from "react-native"
import Header from "../Header_Bottom/Header"
import ListPost from "../Lists/ListPost"
import Bottom from "../Header_Bottom/Bottom"
import { useContext, useEffect } from "react"
import { PostContext } from "../../Contexts/PostProvider"
import { AllPosts } from "../../Apis/FetchConnection/Posts/AllPosts"
import { useIsFocused } from "@react-navigation/native"
export default function HomeScreen()
{   
    const [statePost,dispatchPost] = useContext(PostContext);
    const isFocused = useIsFocused();
    
    useEffect(() =>{
        if(isFocused)
            AllPosts(dispatchPost)
    },[isFocused])
    
    
    return(
                    <View style={styleHomeScreen.containerHomeScreen}>
                            <Header IsMainHeader={true}/>
                                <ListPost listPost={statePost.Posts}/>
                            <Bottom/>
                    </View>
                
        
    )
}

const styleHomeScreen = StyleSheet.create({
    containerHomeScreen: {
        flex:1,
        justifyContent:"center",
        backgroundColor:"white",
        marginTop:StatusBar.currentHeight,
        
    },
})