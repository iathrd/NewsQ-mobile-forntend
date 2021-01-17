import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
//package
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

//screen
import Main from './src/screens/Main';

//redux
import store from './src/redux/store';

export default function App() {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
      console.log('Bootsplash has been hidden successfully');
    });
  }, []);
  return (
    <Provider store={store().store}>
      <PersistGate loading={null} persistor={store().persistore}>
        <Main />
      </PersistGate>
    </Provider>
  );
}
