import { ScrollView, StyleSheet,View,Text } from "react-native"
import ItemLikePostNotification from "../ItemNotification/ItemLikePostNotification"
import { connect } from "react-redux"
import ItemFriendNotification from "../ItemNotification/ItemFriendNotification"
const ListNotification = ({ListNotification}) =>{
    return(
        <ScrollView>
            <View style={styleListNotification.ContainerNotification}>
                <View style={{margin:10}}>
                    <Text style={{fontSize:20,fontWeight:"bold"}}>THÔNG BÁO</Text>
                </View>
                <View style={{ alignItems:"center"}}>
                    <View style={{alignItems:"flex-start"}}>

                        {
                            
                            ListNotification == [] ?
                            <Text>Không có thông báo</Text>
                            :    
                            ListNotification.map((item) =>{
                                if(item.typeNotification == "friend_Request")
                                    return(
                                <ItemFriendNotification 
                                key={item.idNotification}
                                Notification={item}/>
                                )
                                else 
                                return(
                            <ItemLikePostNotification 
                            key={item.idNotification}
                            Notification={item}/>
                            )
                            })
                            // <View>
                            //     <ItemLikePostNotification/>
                            //     <ItemLikePostNotification/>
                            //     <ItemLikePostNotification/>
                            //     <ItemLikePostNotification/>
                            // </View>
                            }
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
const styleListNotification = StyleSheet.create({
    ContainerNotification:{
        flex:1,
        justifyContent:"center",
    },
    NonPostContainer:{
        alignItems:"center",
        marginVertical:10
    }
})

const mapStateToProps = (state) =>({
    ListNotification:state.notification.Notifications
});

export default connect(mapStateToProps)(ListNotification);
