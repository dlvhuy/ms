
import ListPost from './Components/Lists/ListPost';
import Header from './Components/Header/Header';
import PostAdd from './Components/Posts/PostAdd';
import HomeScreen from './Components/Screens/Homescreen';
import TestComponent from './Components/Test/TestComponent'
import ButtonIcon from './Components/CommonComponents/Buttons/ButtonIcon';
import ItemImageList from './Components/CommonComponents/Images/ItemImageList';
import IconRemove from './Components/CommonComponents/Icons/IconRemove';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LogInForm from './Components/Forms/LogInForm';
import RegisterForm from './Components/Forms/RegisterForm';
import Post from './Components/Posts/Post';
import Comment from './Components/Comments/Comment';
import CommentAdd from './Components/Comments/CommentAdd';
import CommentScreen from './Components/Screens/CommentScreen';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
export default function App() {
  const Stack = createNativeStackNavigator();
  return(
    // <Provider store={Store}>
      // {/* <NavigationContainer>
      //   <Stack.Navigator initialRouteName="Login">
      //     <Stack.Screen name="Login" component={LogInForm} options={{headerShown:false}}></Stack.Screen>
      //     <Stack.Screen name="Register" component={RegisterForm} options={{headerShown:false}}></Stack.Screen>
      //     <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}></Stack.Screen>
      //     <Stack.Screen name="AddPost" component={PostAdd} options={{headerShown:false}}></Stack.Screen>
      //     </Stack.Navigator>
      //   </NavigationContainer> */
      //   /* </Provider> */}

       <PostAdd></PostAdd>
   
  )
   

    

}





