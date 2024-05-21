import { StatusBar, StyleSheet, TextInput, View ,Text} from "react-native"
import MyTextInput from "../CommonComponents/Inputs/MyTextInput"
import { useContext, useEffect, useState } from "react"
import { UserInfoContext } from "../../Contexts/UserInfoProvider"
import { searchUserInfo,getUserInfo } from "../../Apis/FetchConnection/UserInfo/UserInfo"
import ItemSearch from "../ItemSearch"
import { useIsFocused, useNavigation } from "@react-navigation/native"
import { PostContext } from "../../Contexts/PostProvider"
import { GetSearchItems } from "../../Reducers/UserInfoAction"

export const SearchScreen = () =>{
    const navigation = useNavigation()
    const  [stateUserInfo,dispatchUserInfo] = useContext(UserInfoContext)
    const [statePost,dispatchPost]  = useContext(PostContext)
   
    const isFocused = useIsFocused()

    console.log("day la SearchScreen: ",stateUserInfo.Search)
    return (
        <View style={searchSceenStyle.screenSearchContainer}>
            <View style={searchSceenStyle.searchContainer} >
                <TextInput
                    placeholder="Search user..."
                    onChangeText={text => {searchUserInfo(text,dispatchUserInfo)}}
                   
                />
            </View>
            <View style={searchSceenStyle.listItemSearchContainer}>
               

                     {
                        (stateUserInfo.Search == false) 
                        ?
                        <View>
                            <Text>Không có users</Text>
                        </View>
                        :
                        stateUserInfo.Search.map((item) =>{return(
                            <ItemSearch
                            key={item.idUser}
                            nameUser={item.userName}
                            avatar={item.avatarImage}
                            onPress={() => {
                                getUserInfo(item.idUser,navigation,dispatchUserInfo,dispatchPost)
                            }}
                                    />
                                )}) 
                                
                                
                    }

               
                
            </View>
        </View>
    )
}
const searchSceenStyle = StyleSheet.create({
    screenSearchContainer:{
        marginTop:StatusBar.currentHeight,
        flex:1,
        alignItems:"center",
        justifyContent:"flex-start"
    },
    searchContainer:{
        marginVertical:10,
        height:40,
        justifyContent:"center",
        paddingHorizontal:10,
        width:350,
        borderRadius:16,
        borderWidth:0.6,   
    },
    listItemSearchContainer:{
        width:350,
        flexDirection:"collumn",
        paddingHorizontal:15,
        alignItems:"flex-start"
        
       
    },
    subListItemSearchContainer:{
       
    }
})