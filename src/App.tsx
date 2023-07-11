import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './store';

import { Cart } from './components/Cart';
import { Catalog } from './components/Catalog';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Catalog />

        <Cart />
      </PersistGate>
    </Provider>
  );
}

export default App;
