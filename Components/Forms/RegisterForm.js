import { View,TextInput, StyleSheet ,Text, Button,Pressable,Alert } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Register } from "../../Apis/FetchConnection/SignIn_SignUp/LoginAPI";
import { memo } from "react";
function RegisterForm ()
{
    const [registerInputText,setRegisterInputText] = useState({UserName:'',PassWord:'',Email:'',ConfirmPassWord:''})
    const [status,setStatus ] = useState('')
    const navigation = useNavigation()

    const handleSetUserName = (text) =>{
        setRegisterInputText(preState =>({
            ...registerInputText,
            UserName:text
        }))
    }
    const handleSetPassword = (text) =>{
        setRegisterInputText(preState =>({
            ...registerInputText,
            PassWord:text
        }))
    }
    const handleSetEmail = (text) =>{
        setRegisterInputText(preState =>({
            ...registerInputText,
            Email:text
        }))
    }
    const handleSetConfirmPassword = (text) =>{
        setRegisterInputText(preState =>({
            ...registerInputText,
            ConfirmPassWord:text
        }))
    }

    const handleSubmitRegister = (registerInputText) =>  {
        if(registerInputText.Email == '' || registerInputText.UserName == '' || registerInputText.ConfirmPassWord == '' || registerInputText.PassWord == '')
            Alert.alert("Có thông tin chưa được điền")
        else if (registerInputText.ConfirmPassWord != registerInputText.PassWord )
            Alert.alert("ConfirmPassword và Password không trùng khớp")
        else{
            Register(navigation,registerInputText).then((response) =>{
                if(!response.success) Alert.alert(response.message)
                else Alert.alert("Thành công")
            })
        }

    }
    return (
        <View style={styleFormLogin.containerForm}>
            
            <View style={styleFormLogin.Form}>
                <View style={styleFormLogin.containerFormTitle}>
                    <Text style={styleFormLogin.title}>Register</Text>
                </View>
                <Text style={styleFormLogin.label}>User Name</Text>
                <TextInput style={styleFormLogin.input} 
                    placeholder="User Name"
                    onChangeText={text => handleSetUserName(text)}
                />
                <Text style={styleFormLogin.label}>Email</Text>
                <TextInput style={styleFormLogin.input}
                 placeholder="Email"
                 onChangeText={text => handleSetEmail(text)}
                 />
                <Text style={styleFormLogin.label}>Password</Text>
                <TextInput
                style={styleFormLogin.input}
                placeholder="Password"
                onChangeText={text => handleSetPassword(text)}
                secureTextEntry
                />
                 <Text style={styleFormLogin.label}>Confirm Password</Text>
                <TextInput
                style={styleFormLogin.input}
                placeholder="Confirm Password"
                secureTextEntry
                onChangeText={text => handleSetConfirmPassword(text)}
                />
                <View style={styleFormLogin.ContainerButton}>
                    <Button title="Register" onPress={() => handleSubmitRegister(registerInputText)}></Button>
                </View>
                <View style={{padding:8,flexDirection:"row",justifyContent:"flex-end"}}>
                        <Text style={{fontSize:12}}>Has account Already?  
                        </Text>
                        <Pressable onPress={() => navigation.navigate("Login")}>
                            <Text style={{fontSize:12,color:"rgb(220, 76, 100)"}}> Press here</Text>
                        </Pressable>
                </View>
            </View>
        </View>
    )
}
export default memo(RegisterForm)

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
        paddingTop:20,
    },
    button:{
        borderRadius:8
    }

});