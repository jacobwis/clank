import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './config/store';
import Home from './views/Home';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
