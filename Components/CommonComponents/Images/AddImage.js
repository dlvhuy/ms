import { StyleSheet, View } from "react-native"
import ButtonIcon from "../Buttons/ButtonIcon"

export const AddImage = ({onPress}) => {
    return (
        
            <View style={imageAdd.container}>
                <ButtonIcon nameIcon={"add"} size={30} onPress={onPress} />
            </View>
       
    )
}

const imageAdd = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        height:70,
        width:70,
        borderRadius:8,
        borderWidth:0.5,
        borderColor:"gray"
    },
})