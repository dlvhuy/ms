import { View, Image,Text, StyleSheet, Touchable, Pressable, Modal, TouchableOpacity } from "react-native"
import ButtonPost from "../CommonComponents/Buttons/ButtonPost";
import { useState,useCallback, useReducer, useEffect, useContext,Children, memo } from "react";
import FontAweSome from "@expo/vector-icons/FontAwesome"
import ButtonIconPress from "../CommonComponents/Buttons/ButtonIconPress";
import CommentScreen from "../Screens/CommentScreen";
import { getUserInfo } from "../../Apis/FetchConnection/UserInfo/UserInfo";
import { CommentPostConnection } from "../../Apis/HubsConnection/Connections/CommentConnection";
import { useNavigation } from "@react-navigation/native";
import { UpdateLikePostConnection } from "../../Apis/HubsConnection/Connections/PostConnection";
import { GetPost2 } from "../../Apis/FetchConnection/Posts/AllPosts";
function Post({Post,children,isPostScreen})
{

    
    const [numOfLines,setNumOfLines] = useState(0);
    const [loadMore,setLoadMore] = useState(false);
    const [isModalVisible,setIsModalVisible] = useState(false);
    const navigation = useNavigation()
   
    const onTextLayout = useCallback(e => {
        if(numOfLines == 0)
            setNumOfLines(e.nativeEvent.lines.length);
    });

    const onLoadMoreToggle = () => {
        setLoadMore(!loadMore);
        
    }
    const openModalComment = (IdPost) =>{
        
        setIsModalVisible(true)
        CommentPostConnection(isModalVisible,IdPost,navigate)
        
    }
    const updateLike = (id) => {
        UpdateLikePostConnection(id)
    }


    return(
       
            <View style={stylePost.Post}>
                <View style={{ paddingHorizontal:20,flexDirection:"row",justifyContent:"space-between"}}>
                    <View style={stylePost.ContainerInfomation}>
                        <Image style={stylePost.imageAvatar} source={{uri:Post.user.avatarImage}} ></Image>
                        <TouchableOpacity onPress={() => {
                            getUserInfo(Post.user.idUser,navigation)
                        }}>
                            <Text style={stylePost.UserName}>{Post.user.userName}</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        (Post.postContentResponses.length > 1 && !isPostScreen)?
                        <View style={stylePost.CircleCount}>
                            <Text style={{color:"gray"}}>{Post.postContentResponses.length - 1}</Text>
                        </View>
                        :
                        <></>

                    }
                </View>
                <View style={stylePost.ContainerStatusAndConTentImage}>
                        <Text style={{paddingHorizontal:20,marginTop:5}}
                        numberOfLines={numOfLines == 0 ? null : loadMore ? numOfLines : 5} 
                        onTextLayout={onTextLayout} >
                        {Post.postContent}
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
                        
                        {
                        children == null ?
                            Post.postContentResponses[0] != null ?
                            <TouchableOpacity onPress={() => {GetPost2(Post.idPost,navigation)}}>
                                <View style={stylePost.ImageContainer} >
                                    <Image style={stylePost.ImageContent} source={{uri:Post.postContentResponses[0].urlimageVideo}}/>
                                 </View>
                            </TouchableOpacity>
                            :   <></>
                            : <>{children}</>
                        
                        }
                </View>
                <View style={stylePost.ContainerLikesInfo}>
                    {
                        (Post.likePost.totalLikes == 0) ?
                        <View style={{maxHeight:20}}/>
                        :
                        <View style={{maxHeight:20, flexDirection:"row",justifyContent:"flex-start",alignItems:"center",gap:5}}>
                            <FontAweSome name="heart" color={"gray"} size={13}></FontAweSome>
                            <Text style={{color:"gray"}}>{Post.likePost.totalLikes} Likes</Text>
                        </View>
                    }
                </View>
                <View style={stylePost.ContainerButton}>
                    <ButtonIconPress buttonIcon={"heart"} buttonTitle={"Like"} onPress={() => updateLike(Post.idPost)} isLike={Post.likePost.isLike}/>
                    <ButtonPost buttonIcon={"comment"} buttonTitle={"Comment"} onPress={() => openModalComment(Post.idPost,navigation)}/>
                    <ButtonPost buttonIcon={"share"} buttonTitle={"Share"} />
                </View>
                <Modal
                 visible={isModalVisible}
                 onRequestClose={() => {setIsModalVisible(false),CommentPostConnection(isModalVisible,Post.idPost)}}
                 animationType="fade"
                 >
                    <CommentScreen idPost={Post.idPost}/>
                </Modal>
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
        borderRadius:8,
        shadowColor:"Black", 
        paddingVertical:10,
        marginVertical:5,
        borderWidth:0.8,
        borderColor:"#f5f5f5"
    },
    ContainerInfomation:{
        flexDirection:"row",
        justifyContent:"flex-start",
       
    },
    imageAvatar:{
        width:40,
        height:40,
        borderRadius:25,
        borderWidth:1,
        marginRight:8
    },
    CircleCount:{
        width:40,
        height:40,
        borderRadius:40,
        backgroundColor:"rgb(240, 240, 240)",
        justifyContent:"center",
        alignItems:"center",
       
    },
    ContainerButton:{
        marginTop:10,
        flexDirection:"row",
        justifyContent:"flex-start"
    },
    ContainerLikesInfo:{
        gap:5,
        marginTop:10,
        paddingHorizontal:20
    },
    ContainerStatusAndConTentImage:{
        flexDirection:"collumn",
        justifyContent:"flex-start"
    },
    ImageContainer:{
        marginTop:15,
    },
    ImageContent:{
        width:'100%',
        height:300,
    },
    status:{
        flexDirection:"column"
    },
    linkText: {
        color: '#2196f3'
    },
    UserName:{
        fontSize:15,
        fontWeight:"bold"
    }

})


export default memo(Post)