import { StyleSheet,Image,Text,View } from "react-native"

export const ImageAvatar = ({avatar,UserName,isHaveInfomation}) =>{
    return(
        <View>
            {isHaveInfomation ?
                    <View style={styleImageAvatar.ContainerInfomation}>
                        <Image style={styleImageAvatar.imageAvatar} source={{uri:avatar}} ></Image>
                        <Text style={styleImageAvatar.UserName}>{UserName}</Text>
                    </View>
                :
                    <View>
                        <Image style={styleImageAvatar.imageAvatar} source={avatar} ></Image>
                        
                    </View>
            }
        </View>
    )
}

const styleImageAvatar = StyleSheet.create({
    ContainerInfomation:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        gap:5,
    },
    imageAvatar:{
        width:35, 
        height:35,
        borderRadius:25,
        borderWidth:1,
        marginRight:8
    },
    UserName:{
        fontSize:18
    },
})