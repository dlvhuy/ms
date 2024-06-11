
import Route from './Route/Route';
import { Provider } from 'react-redux';
import store from './ContextRedux/Store';
export default function App() {
 
  return(
      <Provider store={store}>
            <Route></Route>
      </Provider>
    )
}





