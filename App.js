import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './app/navigation/RootStackScreen';
import reducer from './app/reducers';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

console.disableYellowBox = true;
console.ignoredYellowBox = ['Warning:'];

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
