import { View, Image,Text, StyleSheet, Touchable, Pressable } from "react-native"
import ButtonPost from "../CommonComponents/ButtonPost";
import { useState,useCallback } from "react";
export default function Post({UserName,Status})
{
    const [numOfLines,setNumOfLines] = useState(0);
    const [loadMore,setLoadMore] = useState(false);

    const avatar = require("../../assets/adaptive-icon.png");

    const onTextLayout = useCallback(e => {
        if(numOfLines == 0)
            setNumOfLines(e.nativeEvent.lines.length);
    });

    const onLoadMoreToggle = () => {
        setLoadMore(!loadMore);
        console.log(loadMore)
    }

    return(
       
            <View style={stylePost.Post}>
                <View style={stylePost.ContainerInfomation}>
                    <Image style={stylePost.imageAvatar} source={avatar} ></Image>
                    <Text style={stylePost.UserName}>{UserName}</Text>
                </View>
                <View style={stylePost.ContainerStatusAndConTentImage}>
                   

                        <Text
                        numberOfLines={numOfLines == 0 ? null : loadMore ? numOfLines : 5} 
                        onTextLayout={onTextLayout} >
                        {Status}
                        </Text>
                        {
                            (numOfLines >= 5) &&
                            <View>
                                <Pressable onPress={onLoadMoreToggle}>
                                <Text style={stylePost.linkText}>
                                    {loadMore ? "Load Less":"Load More"}
                                </Text>
                                </Pressable>
                            </View>
                        }
                            
                           
                        
                    <Image style={stylePost.ImageContent} source={avatar}> 

                    </Image>
                </View>
                <View style={stylePost.ContainerButton}>
                    <ButtonPost buttonIcon={"heart"} buttonTitle={"Like"} />
                    <ButtonPost buttonIcon={"comment"} buttonTitle={"Comment"} />
                    <ButtonPost buttonIcon={"share"} buttonTitle={"Share"} />
                </View>
                
            </View>
        
    )
}

const stylePost = StyleSheet.create({

    ContainerPost:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#f5f5f5",
        paddingHorizontal:20
        
    },
    Post:{
        backgroundColor:"white",
        marginVertical:10,
        padding: 20,
        borderRadius:16,
        shadowColor:"Black", 
    },
    ContainerInfomation:{
        flexDirection:"row",
        justifyContent:"flex-start"
    },
    imageAvatar:{
        width:50,
        height:50,
        borderRadius:25,
        borderWidth:1,
        marginRight:8
    },
    ContainerButton:{
        marginTop:10,
        flexDirection:"row",
        justifyContent:"flex-start"
    },
    ContainerStatusAndConTentImage:{
        flexDirection:"collumn",
        justifyContent:"flex-start"
    },
    ImageContent:{
        marginTop:15,
        width:'100%',
        height:300
    },
    status:{
        flexDirection:"column"
    },
    linkText: {
        color: '#2196f3'
    },
    UserName:{
        fontSize:15
    }

})