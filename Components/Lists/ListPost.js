import data from "../../Data/dulieu.json"
import { View,StyleSheet, ScrollView, FlatList,require } from "react-native"
import Post from "../Posts/Post"



export default function ListPost()
{   
    
    return(
        
            <ScrollView>
                <View style={styleListPost.ContainerPost}>
                        
                        {postContext.state.Posts.map((item) =>{ return( 
                            <Post 
                            key={item.IdPost}
                            Post={item}
                            onPressHeartButton={() => console.log("helloworld")}
                            ></Post>
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