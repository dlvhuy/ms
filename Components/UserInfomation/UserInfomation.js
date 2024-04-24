import { View,Image, StyleSheet,Text, Button } from "react-native"
export default function UserInfomation ({IsUser = true,IsYou = true})
{
    const cover = require("../../assets/adaptive-icon.png")
    const avatar = require("../../assets/facebook.png")
    return(
        <View style={styleUserInfomation.containerUserInformation}>
            <View style={styleUserInfomation.ContainerImageCover} >
                <Image style={styleUserInfomation.ViewImageCover} source={cover}></Image>
            </View>
            <View style={styleUserInfomation.ContainInformation}>
                <View style={styleUserInfomation.ContainerImageAvatar}>
                    <Image style={styleUserInfomation.ViewImageAvatar} source={avatar}/>
                    <Text style={styleUserInfomation.TextContainerAvatar}>Hello World</Text>
                </View>
                { 
                IsUser ?
                    IsYou ?
                    <View style={styleUserInfomation.ContainerButtons}>
                        <Button color={"#C0C0C0"} title="Chỉnh sửa trang cá nhân"/>
                    </View>
                    :
                    <View style={styleUserInfomation.ContainerButtons}>
                        <Button title="Thêm bạn bè"/>
                        <Button color={"#C0C0C0"} title="Theo dõi"/>
                    </View>
                    
                    :
                    <View style={styleUserInfomation.ContainerButtons}>
                        <Button title="Mời"/>
                        <Button color={"#C0C0C0"} title="Đã tham gia"/>
                    </View>
                }  
            </View>
        </View>
    )
}
const styleUserInfomation = StyleSheet.create({
    containerUserInformation:{
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:20,
        backgroundColor:"white",
        
        
    },
    ContainerImageCover:{
       justifyContent:"center",
      
        
    },
    ViewImageCover:{
        height:300,
    },
    ContainerImageAvatar:{
        justifyContent:"center",
        alignItems:"center",
        
        
    },
    ContainInformation:{
        bottom:40
    },
    ViewImageAvatar:{
        height:150,
        width:150,
        borderRadius:200,
        
    },
    TextContainerAvatar:{
        fontSize:20,
        fontWeight:"bold"
    },
    ContainerButtons:{
        flexDirection:"row",
        columnGap:10,
        paddingVertical:10,
    },

})