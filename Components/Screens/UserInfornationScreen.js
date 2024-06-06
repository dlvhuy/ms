import {View, StyleSheet,StatusBar, ScrollView } from "react-native"
import ListPost from "../Lists/ListPost"
import UserInfomation from "../UserInfomation"
import Bottom from "../Header_Bottom/Bottom"
import { connect } from "react-redux"


function UserInformationScreen({userInfo,listPostUserInfo})
{   

    // thêm chức nang chỉnh sửa Thông tin người dung,
    // thêm chức  năng tạo group, thêm thành viên vào group
    // tìm kiếm groups hoặc người dùng
    // thêm cơ chế ảnh vào comment và các post
    
    return(
        <View style={styleHomeScreen.containerHomeScreen}>
            
            <ScrollView>
                <UserInfomation UserInfo={userInfo} />
                <ListPost listPost={listPostUserInfo} isCurrentUser={userInfo.isCurrentUser}/>
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

const mapStateToProps = (state) =>({
    listPostUserInfo:state.post.Posts,
    userInfo:state.userInfo.UserInfo
});

export default connect(mapStateToProps)(UserInformationScreen);