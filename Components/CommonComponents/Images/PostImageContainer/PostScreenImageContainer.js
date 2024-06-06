import { View,Image, StyleSheet } from "react-native"

export const PostScreenImageContainer = ({listPostContain}) =>{
    console.log(listPostContain)
    return (
        <View style={PostScreenImageContainerStyle.ImageContainer}>
        {listPostContain.map((item,index) =>{
            return(
                <View key={index}>
                    <Image style={PostScreenImageContainerStyle.ImageContent} resizeMode="cover" source={{uri:item.urlimageVideo}}/>
                </View>
            )    
        })}
    </View>
    )
}

const PostScreenImageContainerStyle = StyleSheet.create({
    ImageContainer:{
        marginTop:16,   
        gap:8,
    },
    ImageContent:{
        width:"100%",
        aspectRatio: 16 / 9,
        borderRadius:8
    },
})