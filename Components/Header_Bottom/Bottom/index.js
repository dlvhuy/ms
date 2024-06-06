import { StyleSheet, View } from "react-native"
import ButtonIcon from "../../CommonComponents/Buttons/ButtonIcon"
import { useNavigation } from "@react-navigation/native"
import { getUserInfo } from "../../../Apis/FetchConnection/UserInfo/UserInfo"
import { connect } from "react-redux"
const Bottom = ({userInfoID}) =>{

    const navigation = useNavigation()
    console.log("day la Bottom: ",userInfoID)
    return(
        <View style={styleBottom.containerBottom}>
            <ButtonIcon nameIcon={"home"} size={30} onPress={() => navigation.navigate("Home")}></ButtonIcon>
            <ButtonIcon nameIcon={"search"} size={30} onPress={() => navigation.navigate("Search")}></ButtonIcon>
            {/* <ButtonIcon nameIcon={"add-circle"} size={30} onPress={() => navigation.navigate("AddPost")}></ButtonIcon> */}
            <ButtonIcon nameIcon={"person"} size={30} onPress={() => {
                getUserInfo(userInfoID,navigation)
                }} ></ButtonIcon>
        </View>
    )
}

const styleBottom = StyleSheet.create({
    containerBottom:{
        
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:20,
        flexDirection:"row",
        backgroundColor:"white",
        height:40,
        borderTopWidth:0.2,
        borderColor:"#f5f5f5"
    },
})
const mapStateToProps = (state) =>({
    userInfoID:state.userInfo.CurrentUserID
});
export default connect(mapStateToProps)(Bottom);