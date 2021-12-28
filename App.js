import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './Navigation';
import store from './store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
