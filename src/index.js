import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { App } from './components/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter basename='/goit-react-hw-08-phonebook'>
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <ChakraProvider>
//           <App />
//         </ChakraProvider>
//       </PersistGate>
//     </Provider>
//   </BrowserRouter>
// );
