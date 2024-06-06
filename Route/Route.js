import HomeScreen from "../Components/Screens/Homescreen"
import RegisterForm from "../Components/Forms/RegisterForm"
import LogInForm from "../Components/Forms/LogInForm"
import PostAdd from "../Components/Posts/PostAdd";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import UserInformationScreen from "../Components/Screens/UserInfornationScreen";
import { PostAddScreen } from "../Components/Screens/PostAddScreen";
import SearchScreen  from "../Components/Screens/SearchScreen";
import  PostScreen  from "../Components/Screens/PostScreen";

export default function Route(){
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="Login" component={LogInForm} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="Register" component={RegisterForm} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="AddPost" component={PostAddScreen} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="UserInfomation" component={UserInformationScreen} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}}></Stack.Screen>
            <Stack.Screen name="PostDetail" component={PostScreen} options={{headerShown:false}}></Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        
    )
} 
