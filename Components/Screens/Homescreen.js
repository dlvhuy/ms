import {View, StyleSheet,StatusBar, ScrollView } from "react-native"
import Header from "../Header_Bottom/Header"
import ListPost from "../Lists/ListPost"
import Bottom from "../Header_Bottom/Bottom"
export default function HomeScreen()
{   
    
    return(

                
                    <View style={styleHomeScreen.containerHomeScreen}>
                            <Header IsMainHeader={true}/>
                                <ListPost/>
                            <Bottom/>
                            
                    </View>
                
        
    )
}

const styleHomeScreen = StyleSheet.create({
    containerHomeScreen: {
        
        justifyContent:"center",
        backgroundColor:"white",
        marginTop:StatusBar.currentHeight,
        marginBottom:StatusBar.currentHeight-6,
        
        
    },
})