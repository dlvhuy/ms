import { StyleSheet, Text, TouchableOpacity, View,Image } from "react-native"
import { GetPost2 } from "../../Apis/FetchConnection/Posts/AllPosts";
import { useNavigation } from "@react-navigation/native";
export default ItemLikePostNotification = ({Notification}) =>{

    const navigation = useNavigation()
    return(
        <TouchableOpacity onPress={() => {GetPost2(Notification.idItemRelative,navigation)}}>
                <View style={styleItemLikePostNotification.container}>
                    <View style={{flexDirection:"row",paddingHorizontal:15}}>
                        <View style={styleItemLikePostNotification.ContainerImage}>
                            <Image style={styleItemLikePostNotification.imageAvatar} source={{uri:Notification.userInfo.avatarImage}}/>
                        </View>
                        <View style={styleItemLikePostNotification.ContainerContentItemLikePostNotification}>
                            <Text style={{paddingHorizontal:10}} numberOfLines={3}>
                                <Text style={{fontWeight:"bold"}}>{Notification.userInfo.userName} </Text>
                                {Notification.messageNotification}
                            </Text>
                        </View>
                    </View>
                </View>
        </TouchableOpacity>
    )
}

const styleItemLikePostNotification = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        maxHeight:100,
        marginVertical:8

    },
    ContainerContentItemLikePostNotification:{
        maxWidth:300,
        paddingHorizontal:10,
    },
    ContainerImage:{
        
        alignItems:"center",
        
    },
    imageAvatar:{
        width:60,
        height:60,
        borderRadius:60,
        borderWidth:1,
    },

});