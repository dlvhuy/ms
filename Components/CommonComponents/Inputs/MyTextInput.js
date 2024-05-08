import { useEffect, useState,useRef } from "react"
import { StyleSheet,TextInput } from "react-native"
export default function MyTextInput({Placeholder,textChange})
{
    const [height, setHeight] = useState()
    const myTextInputRef = useRef(null);
    useEffect(() =>{
        console.log(height)
        
    },[height])
    return <TextInput
        multiline
        numberOfLines={4}
        onChangeText={textChange}
        ref={myTextInputRef}
        textAlignVertical="top"
        placeholder={Placeholder}
        style={[styleInput.input,{height:height,maxHeight:105}]}
        onContentSizeChange={({
            nativeEvent:{
                contentSize:{height}
            }

        }) => {
            
            setHeight(height)
        }

    }/>
}

const styleInput = StyleSheet.create({
    input:{
        
        paddingHorizontal:16,
        paddingVertical:8,
        borderRadius:16,
        overflow:"hidden",
        fontSize:17,
        borderColor:"gray",
        backgroundColor:"rgb(240, 242, 245)"
    }
})