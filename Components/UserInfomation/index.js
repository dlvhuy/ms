import { View,Image, StyleSheet,Text, Dimensions } from "react-native"
import { Button } from "../CommonComponents/Buttons/Button"
import { SendFriendRequestConnection,ResponseFriendRequestConnection } from "../../Apis/HubsConnection/Connections/FriendConnection"
export default function UserInfomation ({UserInfo})
{
    const cover = require("../../assets/adaptive-icon.png")
    const avatar = require("../../assets/facebook.png")
    const handleButtonFriend = (Status) =>{
        switch(Status)
        {
            case null:
                return(<Button title="Thêm bạn bè" onPress={() => SendFriendRequestConnection(UserInfo.idUser)}/>)
            case "Pending":
                return(<Button title="Đã gửi yêu cầu" onPress={() => ResponseFriendRequestConnection(UserInfo.idUser,false)}/>)
            case "Received_Request":
                return(<Button title="Chấp nhận" onPress={() => ResponseFriendRequestConnection(UserInfo.idUser,true)}/>)
            case "Accepted":
                return(<Button title="Đã là bạn bè" onPress={() => {console.log("da la ban be")}}/>)
        }
    }
    console.log("day la UserInfomation",UserInfo)
    return(
        <View style={styleUserInfomation.containerUserInformation}>
            <View style={styleUserInfomation.ContainerImageCover} >
                <Image style={styleUserInfomation.ViewImageCover} source={{uri:UserInfo.coverImage}}></Image>
            </View>
            <View style={styleUserInfomation.ContainInformation}>
                <View style={styleUserInfomation.ContainerImageAvatar}>
                        <Image style={styleUserInfomation.ViewImageAvatar} source={{uri:UserInfo.avatarImage}}/>
                        <Text style={styleUserInfomation.TextContainerAvatar}>{UserInfo.userName}</Text>
                </View>
            </View>
            { 
                
                UserInfo.isCurrentUser ?
                    <View style={styleUserInfomation.ContainerButtons}>
                        <Button title="Chỉnh sửa trang cá nhân"></Button>
                    </View>
                    :
                    <View style={styleUserInfomation.ContainerButtons}>
                        {handleButtonFriend(UserInfo.friendStatus)}
                        <Button color={"#C0C0C0"} title="Theo dõi"/>
                    </View>
                            
            }  
        </View>
    )
}
const styleUserInfomation = StyleSheet.create({
    containerUserInformation:{
        backgroundColor:"white",
        alignItems:"center"
        
    },
    containUserInfomationHeader:{
        
        maxHeight:700,
        
    },
    ContainerImageCover:{
        
        width:Dimensions.get("screen").width,
       
        
    },
    ViewImageCover:{
        width:null,
        height:200,
    },
    ContainerImageAvatar:{
        justifyContent:"center",
        alignItems:"center",
      
        
    },
    ContainInformation:{
        // position:"absolute",
        // bottom:5,
        alignItems:"center",
        width:200,
    },
    ViewImageAvatar:{
        height:125,
        width:125,
        borderRadius:200,
        borderColor:"white",
        borderWidth:3,  
    },
    TextContainerAvatar:{
        fontSize:20,
        fontWeight:"bold"
    },
    ContainerButtons:{
        flexDirection:"row",
        gap:10,
        paddingVertical:10,
    },

})