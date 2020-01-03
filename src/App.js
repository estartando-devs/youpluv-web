import React from 'react';
import Routers from './Router';
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}> 
      <Routers/>
    </Provider>
  );
}

export default App;
