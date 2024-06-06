import { StatusBar, StyleSheet, TextInput, View ,Text} from "react-native"
import { searchUserInfo,getUserInfo } from "../../Apis/FetchConnection/UserInfo/UserInfo"
import ItemSearch from "../ItemSearch"
import { useIsFocused, useNavigation } from "@react-navigation/native"
import { connect } from "react-redux"
import Bottom from "../Header_Bottom/Bottom"

const SearchScreen = ({userInfoSearchs}) =>{
    const navigation = useNavigation()
    const isFocused = useIsFocused()
    console.log("day la SearchScreen: ",userInfoSearchs)
    return (
        <View style={searchSceenStyle.screenSearchContainer}>
            <View style={{alignItems:"center"}}>
                <View style={searchSceenStyle.searchContainer} >
                    <TextInput
                        placeholder="Search user..."
                        onChangeText={text => {searchUserInfo(text)}}
                        
                        />
                </View>
                <View style={searchSceenStyle.listItemSearchContainer}>
                        {
                            (userInfoSearchs == false) 
                            ?
                            <View>
                                <Text>Không có users</Text>
                            </View>
                            :
                            userInfoSearchs.map((item) =>{return(
                                <ItemSearch
                                key={item.idUser}
                                nameUser={item.userName}
                                avatar={item.avatarImage}
                                onPress={() => {
                                    getUserInfo(item.idUser,navigation)
                                    }}
                                    />
                                    )}) 
                                    
                                    
                                    }
                </View>
            </View>
            <Bottom/>
        </View>
    )
}
const searchSceenStyle = StyleSheet.create({
    screenSearchContainer:{
        flex:1,
        
        justifyContent:"space-between",
        marginTop:StatusBar.currentHeight,
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

const mapStateToProps = (state) =>({
    userInfoSearchs:state.userInfo.Search
});
export default connect(mapStateToProps)(SearchScreen);