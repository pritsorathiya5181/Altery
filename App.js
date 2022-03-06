import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './app/navigation/RootStackScreen';

function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}

export default App;
