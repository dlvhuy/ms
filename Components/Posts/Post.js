import { View, Image,Text, StyleSheet, Touchable, Pressable, Modal, TouchableOpacity } from "react-native"
import ButtonPost from "../CommonComponents/Buttons/ButtonPost";
import { useState,useCallback, useReducer, useEffect, useContext } from "react";
import FontAweSome from "@expo/vector-icons/FontAwesome"
import ButtonIconPress from "../CommonComponents/Buttons/ButtonIconPress";
import CommentScreen from "../Screens/CommentScreen";
import CommentProvider from "../../Contexts/CommentProvider";
import { getUserInfo } from "../../Apis/FetchConnection/UserInfo/UserInfo";

import { CommentPostConnection } from "../../Apis/HubsConnection/Connections/CommentConnection";
import { useNavigation } from "@react-navigation/native";
import { UserInfoContext } from "../../Contexts/UserInfoProvider";
import { PostContext } from "../../Contexts/PostProvider";
export default function Post({Post,onPressHeartButton})
{
    const [listComment,setListComment] = useState([])
    const [numOfLines,setNumOfLines] = useState(0);
    const [loadMore,setLoadMore] = useState(false);
    const [isModalVisible,setIsModalVisible] = useState(false);
    const [stateUserInfo,dispatchUserInfo] = useContext(UserInfoContext)
    const [statePost,dispatchPost] = useContext(PostContext);
    const avatar = require("../../assets/adaptive-icon.png");

    const onTextLayout = useCallback(e => {
        if(numOfLines == 0)
            setNumOfLines(e.nativeEvent.lines.length);
    });

    
    const onLoadMoreToggle = () => {
        setLoadMore(!loadMore);
        
    }
    const openModalComment = (IdPost) =>{
        
        setIsModalVisible(true)
        CommentPostConnection(isModalVisible,IdPost)
        
    }
    const navigation = useNavigation()
    return(
       
            <View style={stylePost.Post}>
                <View style={stylePost.ContainerInfomation}>
                    <Image style={stylePost.imageAvatar} source={{uri:Post.avatarImage}} ></Image>
                    <TouchableOpacity onPress={() => {
                        getUserInfo(Post.idUser,navigation,dispatchUserInfo,dispatchPost)
                        
                        }}>
                        <Text style={stylePost.UserName}>{Post.userName}</Text>
                    </TouchableOpacity>
                </View>
                <View style={stylePost.ContainerStatusAndConTentImage}>
                        <Text style={{paddingHorizontal:20}}
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
                    <Image style={stylePost.ImageContent} source={avatar}/>    
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
                    <ButtonIconPress buttonIcon={"heart"} buttonTitle={"Like"} onPress={onPressHeartButton} isLike={Post.likePost.isLike}/>
                    <ButtonPost buttonIcon={"comment"} buttonTitle={"Comment"} onPress={() => openModalComment(Post.idPost)}/>
                    <ButtonPost buttonIcon={"share"} buttonTitle={"Share"} />
                </View>
                <Modal
                 visible={isModalVisible}
                 onRequestClose={() => {setIsModalVisible(false),CommentPostConnection(isModalVisible,Post.idPost)}}
                 animationType="fade"
                 >
                    <CommentProvider IdPost={Post.idPost}>
                        <CommentScreen />
                    </CommentProvider>
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
        
        borderRadius:4,
        shadowColor:"Black", 
        paddingVertical:10,
        marginVertical:5,
        borderWidth:0.1,
        borderColor:"#f5f5f5"
    },
    ContainerInfomation:{
        flexDirection:"row",
        justifyContent:"flex-start",
        paddingHorizontal:20
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
    ContainerLikesInfo:{
        gap:5,
        marginTop:10,
        paddingHorizontal:20
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