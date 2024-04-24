import data from "../../Data/dulieu.json"
import { View,StyleSheet, ScrollView, FlatList,require } from "react-native"
import Post from "../Posts/Post"
import PostAdd from "../Posts/PostAdd"
import Header from "../Header/Header"
export default function ListPost()
{
   
    return(
        
            <ScrollView>
                <View style={styleListPost.ContainerPost}>
                        <PostAdd UserName={"Hello world"}/>
                        {data.map((item) =>{ return( 
                            <Post key={item.UserName} UserName={item.UserName} Status={item.StatusContent}></Post>
                        )})}
                </View>
            </ScrollView>
       
    )
}
const styleListPost = StyleSheet.create({

    ContainerPost:{
        flex:1,
        justifyContent:"center",
        paddingHorizontal:20,
        backgroundColor:"#f5f5f5"
        
        
        
    },
})