import { StyleSheet, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
export default function IconRemove()
{
    return(
        <View style={styleIcon.icon}>
            <Ionicons name="remove-circle" color={"red"}  size={25}></Ionicons>
        </View>

    )
    
}

const styleIcon = StyleSheet.create({
    icon:{
        width:200,
        height:200,
        top:190
        
        
    }
})