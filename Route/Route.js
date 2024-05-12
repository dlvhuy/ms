import HomeScreen from "../Components/Screens/Homescreen"
import RegisterForm from "../Components/Forms/RegisterForm"
import LogInForm from "../Components/Forms/LogInForm"
import PostAdd from "../Components/Posts/PostAdd";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';



export default function Route(){
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="Login" component={LogInForm} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="Register" component={RegisterForm} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="AddPost" component={PostAdd} options={{headerShown:false}}></Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
    )
} 