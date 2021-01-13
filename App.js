import React from 'react';
import {View, Text} from 'react-native';

//package
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

//screen
import Main from './src/screens/Main';

//redux
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store().store}>
      <PersistGate loading={null} persistor={store().persistore}>
        <Main />
      </PersistGate>
    </Provider>
  );
}
