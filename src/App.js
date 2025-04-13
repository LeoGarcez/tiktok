import React from 'react';

import {Navigation} from './navigations/Navigation';
import {AuthProvider} from './hooks/useUser';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </GestureHandlerRootView>
  );
}

export default App;
