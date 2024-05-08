import { View, Image,Text, StyleSheet, Touchable, Pressable, Modal } from "react-native"
import ButtonPost from "../CommonComponents/Buttons/ButtonPost";
import { useState,useCallback, useReducer, useEffect } from "react";
import FontAweSome from "@expo/vector-icons/FontAwesome"
import ButtonIconPress from "../CommonComponents/Buttons/ButtonIconPress";
import CommentScreen from "../Screens/CommentScreen";
import CommentProvider from "../../Contexts/CommentContext";
import { CommentReducer, InitCommentState, getComments } from "../../Redux/Reducers/CommentReducer/CommentReducer";
export default function Post({Post,onPressHeartButton})
{
    const [listComment,setListComment] = useState([])
    const [numOfLines,setNumOfLines] = useState(0);
    const [loadMore,setLoadMore] = useState(false);
    const [isModalVisible,setIsModalVisible] = useState(false);

    const [stateComment,dispatchComment] = useReducer(CommentReducer,InitCommentState)

    const avatar = require("../../assets/adaptive-icon.png");

    const onTextLayout = useCallback(e => {
        if(numOfLines == 0)
            setNumOfLines(e.nativeEvent.lines.length);
    });
    
    const onLoadMoreToggle = () => {
        setLoadMore(!loadMore);
        
    }
    const openModalComment = (IdPost) =>{
        
        dispatchComment(getComments(IdPost))
        setIsModalVisible(true)
        
    }
    useEffect(() =>{
        
        setListComment(stateComment.Comments)
        if(listComment == [])
            return
    },[stateComment.Comments])
    return(
       
            <View style={stylePost.Post}>
                <View style={stylePost.ContainerInfomation}>
                    <Image style={stylePost.imageAvatar} source={avatar} ></Image>
                    <Text style={stylePost.UserName}>{Post.userName}</Text>
                </View>
                <View style={stylePost.ContainerStatusAndConTentImage}>
                        <Text
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
                        <FontAweSome name="heart" color={"gray"} size={13}></FontAweSome>
                        <Text style={{color:"gray"}}>10 likes</Text>
                </View>
                <View style={stylePost.ContainerButton}>
                    <ButtonIconPress buttonIcon={"heart"} buttonTitle={"Like"} onPress={onPressHeartButton} isLike={false}/>
                    <ButtonPost buttonIcon={"comment"} buttonTitle={"Comment"} onPress={() => openModalComment(Post.idPost)}/>
                    <ButtonPost buttonIcon={"share"} buttonTitle={"Share"} />
                </View>
                <Modal
                 visible={isModalVisible}
                 onRequestClose={() => setIsModalVisible(false)}
                 animationType="fade"
                 >
                    <CommentProvider IdPost={Post.IdPost} listComment={listComment}>
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
    ContainerLikesInfo:{
        gap:5,
        marginTop:10,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center"
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