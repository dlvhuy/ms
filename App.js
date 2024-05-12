
import Bottom from './Components/Header_Bottom/Bottom';
import store from './store';
import PostProvider from './Contexts/PostProvider';
import Route from './Route/Route';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import {name as appName} from "./app.json"
export default function App() {
 
  return(
    AppRegistry.registerComponent("main", ()=>{
    <Provider store={store}>
              <Route></Route>
    </Provider>
    })
    
          // <Bottom></Bottom>
       

      //  <LogInForm></LogInForm>
   
  )
   

    

}





