import { View,TextInput, StyleSheet ,Text, Button } from "react-native"

export default function RegisterForm ()
{
    return (
        <View style={styleFormLogin.containerForm}>
            
            <View style={styleFormLogin.Form}>
                <View style={styleFormLogin.containerFormTitle}>
                    <Text style={styleFormLogin.title}>Register</Text>
                </View>

                <Text style={styleFormLogin.label}>User Name</Text>
                <TextInput style={styleFormLogin.input} placeholder="User Name"/>
                <Text style={styleFormLogin.label}>Email</Text>
                <TextInput style={styleFormLogin.input} placeholder="Email"/>
                <Text style={styleFormLogin.label}>Password</Text>
                <TextInput
                style={styleFormLogin.input}
                placeholder="Password"
                secureTextEntry
                />
                 <Text style={styleFormLogin.label}>Confirm Password</Text>
                <TextInput
                style={styleFormLogin.input}
                placeholder="Confirm Password"
                secureTextEntry
                />
                <View style={styleFormLogin.ContainerButton}>
                    <Button title="Register"></Button>
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
        paddingVertical:20,
    },
    button:{
        borderRadius:8
    }

});