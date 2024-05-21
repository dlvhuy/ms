import { View,TextInput, StyleSheet ,Text, Button,Pressable } from "react-native"
import { postLoginData } from "../../Apis/FetchConnection/SignIn_SignUp/LoginAPI";
import { useContext, useEffect,useReducer,useState } from "react";
import { PostContext } from "../../Contexts/PostProvider";
import { UserInfoContext } from "../../Contexts/UserInfoProvider";
export default function LogInForm (props)
{
    const [loginInputText,setLoginInputText] = useState({UserName:'',PassWord:''})
    
    const [stateUserInfo,dispatchUserInfo] = useContext(UserInfoContext)
    
    const handleSetUserName = (text) =>{
        setLoginInputText(preState =>({
            ...loginInputText,
            UserName:text
        }))
    }
    const handleSetPassword = (text) =>{
        setLoginInputText(preState =>({
            ...loginInputText,
            PassWord:text
        }))
    }
  
    
    return (
        <View style={styleFormLogin.containerForm}>
            
            <View style={styleFormLogin.Form}>
                <View style={styleFormLogin.containerFormTitle}>
                    <Text style={styleFormLogin.title}>Login</Text>
                </View>

                <Text style={styleFormLogin.label}>User Name</Text>
                <TextInput
                onChangeText={text => handleSetUserName(text)}
                 style={styleFormLogin.input}
                 placeholder="User Name"/>
                <Text style={styleFormLogin.label}>Password</Text>
                <TextInput
                onChangeText={text => handleSetPassword(text)}
                style={styleFormLogin.input}
                placeholder="Password"
                secureTextEntry
                />
                <View style={styleFormLogin.ContainerButton}>
                    <Button onPress={() =>{postLoginData(props,loginInputText,dispatchUserInfo)}} style={styleFormLogin.button} title="Login"></Button>
                </View>
                <View style={{padding:8,flexDirection:"row",justifyContent:"flex-end"}}>
                        <Text style={{fontSize:12}}>Don't have an account?  
                        </Text>
                        <Pressable onPress={() => props.navigation.navigate("Register")}>
                            <Text style={{fontSize:12,color:"rgb(220, 76, 100)"}}> Register</Text>
                        </Pressable>
                </View>
            </View>
        </View>
    )
}

const styleFormLogin =  StyleSheet.create({
    containerForm:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#f5f5f5",
        paddingHorizontal:20
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        alignContent:"center"        
    },
    containerFormTitle:{
        
        justifyContent:"center",
        alignItems:"center"
    },
    Form:{
        backgroundColor:"white",
        padding: 20,
        borderRadius:16,
        shadowColor:"Black",
    },
    label:{
        fontSize:16,
        marginBottom:5,
        paddingVertical:5,
    },
    input:{
        height:40,
        borderColor:"#ddd",
        borderWidth:1,
        padding:10,
        borderRadius:8,
        paddingVertical:10,
    },
    ContainerButton:{
       paddingTop:15
    }

});