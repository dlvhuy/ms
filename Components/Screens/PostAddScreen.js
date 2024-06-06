import { StyleSheet,View,StatusBar } from "react-native"
import PostAdd from "../Posts/PostAdd"
import Header from "../Header_Bottom/Header"
export const PostAddScreen  = () =>{
    return(
        <View style={stylePostAddScreen.container}>
            <Header/>
            <PostAdd UserName={"string"}/>    
        </View>
    )
}

const stylePostAddScreen = StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
       flex:1,
        
        justifyContent:"flex-start"
        

    }
})