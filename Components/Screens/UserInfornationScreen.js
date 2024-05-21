import {View, StyleSheet,StatusBar, ScrollView } from "react-native"
import Header from "../Header_Bottom/Header"
import ListPost from "../Lists/ListPost"
import UserInfomation from "../UserInfomation"
import { Button } from "../CommonComponents/Buttons/Button"
import Bottom from "../Header_Bottom/Bottom"
import { useContext } from "react"
import { UserInfoContext } from "../../Contexts/UserInfoProvider"
import { PostContext } from "../../Contexts/PostProvider"

export default function UserInformationScreen()
{
    const [stateUserInfo,dispatchUserInfo] = useContext(UserInfoContext);
    const [statePost,dispatchPost]= useContext(PostContext);
    // thêm chức nang chỉnh sửa Thông tin người dung,
    // thêm chức  năng tạo group, thêm thành viên vào group
    // tìm kiếm groups hoặc người dùng
    // thêm cơ chế ảnh vào comment và các post
    
    return(
        <View style={styleHomeScreen.containerHomeScreen}>
            
            <ScrollView>
                <UserInfomation UserInfo={stateUserInfo.UserInfo} />
                <ListPost listPost={statePost.Posts} isCurrentUser={stateUserInfo.UserInfo.isCurrentUser}/>
            </ScrollView>
            <Bottom/>
        </View>
    )
}

const styleHomeScreen = StyleSheet.create({
    containerHomeScreen: {
        flex:1,
        justifyContent:"space-between",
        backgroundColor:"#f5f5f5",
        marginTop:StatusBar.currentHeight
    },
})