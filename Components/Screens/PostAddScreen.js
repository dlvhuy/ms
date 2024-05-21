import { StyleSheet,View } from "react-native"
import Bottom from "../Header_Bottom/Bottom"
import PostAdd from "../Posts/PostAdd"
import Header from "../Header_Bottom/Header"
export const PostAddScreen  = () =>{
    return(
        <View style={stylePostAddScreen.container}>
            <Header/>
            <PostAdd/>    
        </View>
    )
}

const stylePostAddScreen = StyleSheet.create({
    container:{
       flex:1,
        
        justifyContent:"flex-start"
        

    }
})