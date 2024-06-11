import { StyleSheet, View,Text,Image, StatusBar,Modal, TouchableOpacity } from "react-native"
import FontAwsome from "@expo/vector-icons/FontAwesome"
import ButtonIcon from "../../CommonComponents/Buttons/ButtonIcon";
import { useState } from "react";
import NotificationScreen from "../../Screens/NotificationScreen";
import { AllNotifications } from "../../../Apis/FetchConnection/Notification/Notification";
import { useNavigation } from "@react-navigation/native";
export default function Header({IsMainHeader})
{
    const [isModalVisible,setIsModalVisible] = useState(false)
    const navigation = useNavigation()
    const handleCLickBellButton = () => {
        AllNotifications()
        setIsModalVisible(true)
    }

    if(IsMainHeader)
    {
        const avatar = require("../../../assets/adaptive-icon.png");
        return (
            <View style={styleHeader.container}>
                <Text style={styleHeader.HeaderText}>HD SOCIA</Text>
                <View style={{flexDirection:"row",gap:5}}>
                    <View >
                        <View style={styleHeader.cicleTotalNotification}></View>
                        <ButtonIcon nameIcon={"notifications"} size={25} onPress={handleCLickBellButton}></ButtonIcon>
                    </View>
                    <View>
                        <Image style={styleHeader.imageAvatar} source={avatar} ></Image>
                    </View>
                </View>

                <Modal
                    visible={isModalVisible}
                    onRequestClose={() => {setIsModalVisible(false)}}
                    animationType="slide"
                    >
                    <NotificationScreen/>
                </Modal>
            </View>
        )
    } 
    else{
        return(
            <View style={styleHeader.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwsome color={"gray"} name="arrow-left" size={20}></FontAwsome>
                </TouchableOpacity>
            </View>
        )
    }
}

const styleHeader= StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:20,
        flexDirection:"row",
        borderTopRightRadius:8,
        borderTopLeftRadius:8,
        height:50,
        backgroundColor:"white",
        borderBottomWidth:0.1,
    },
   
    HeaderText:{
        fontSize:25,
        fontWeight:"bold",
        color:"black"
    },
    cicleTotalNotification:{
        width:7,
        height:7,
        borderRadius:25,
        backgroundColor:"red",
        position:"absolute",
        left:25,
        top:5
    },
    imageAvatar:{
        width:40,
        height:40,
        borderRadius:25,
        borderWidth:1,
        marginRight:8,
        
    },
})